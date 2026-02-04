# IP address blacklisting

## Prompt

### Overview

As part of our anomaly detection offering we would like to provide the possibility of optionally not allowing traffic from untrusted IP addresses.

The scope of this exercise is to create the technical + API design of the first iteration of a HTTP service that can determine whether a given IP address is allowed or blocked by this source:

https://github.com/firehol/blocklist-ipsets

If the IP is determined to be blocked, helpful information should be returned with the response, such as the source (the list that has the IP blocked) and any other metadata that may be helpful. The primary caller of this service will be our authentication pipeline.

As you’ll find, there are ​many​ lists available, but for the time being we’ll focus on starting with only the aggregate lists: ​firehol_level1 ​through ​firehol_level4​. In the future more lists may be added. In our experience, it’s best to start the exercise by thinking about the data structure for storing the information from blocklists

### Features

We’ve identified a few features that we’d like implemented with this service:

* The FireHOL blocklists change over time. This service should provide regularly up-to-date blocklists without the need for an engineer to manually intervene and update the lists by hand.
* The service must respond ​very quickly​; this code executes in a hot path - every login attempt will submit a request to this service. Any unnecessary delay in the responses from this service will impact the latency of the login request.
* We want to make sure other engineers can monitor how well this service performs over time.
* We do not want an external data store for this project to avoid any additional network latency per request.

### Assessment

We assess a number of skills in this exercise. In no particular order, we look for:

* Assess and Understand the Problem and Scope
* System Design
* Efficiency
* Written Communication and Interaction
* Autonomy and Expectation Management
* Scope Management
* Attention to Detail
* Customer Focus
* API Quality
* Transparency

## Data

[list1](https://github.com/firehol/blocklist-ipsets/blob/master/firehol_level1.netset)
[list2](https://github.com/firehol/blocklist-ipsets/blob/master/firehol_level2.netset)
[list3](https://github.com/firehol/blocklist-ipsets/blob/master/firehol_level3.netset)
[list4](https://github.com/firehol/blocklist-ipsets/blob/master/firehol_level4.netset)

Quantity analysis:

* list1 - 3k addresses
* list2 - 19k addresses
* list3 - 16k addresses
* list4 - 140k addresses

Total addresses: 178k addresses
    * Total CIDR ranges: (3k + 500 + 1k + 3k) = ~8k
    * Total fully defined ip addresses: ~170k
    * Only 5% of entries are CIDRs, but they can cover so many ip addresses
    * Total Memory required for Addresses = 200k addresses * (32 bits per ip hash + 1 byte filename hash) = 1,000k bytes = 1mb total storage

## Open Questions

* How many more addresses will be added over the next year?
    * 2x?, 10x?, 100x?
    * Over the next 5/10 years?
* How many years do we want to run this service?
    * Forever

## Possible Solution Components

### Hashtables

Use two hashtables stored in memory:

1) Hashtable w/ and entry for every blacklisted ip address
2) Another hashtable to keep track of which file an address came from

Each IP address can be converted into a 32 bit integer
We can support mapping to 256 files using one byte 

Lookup: O(1)
Insert: O(1)
Delete: O(1)
Memory: O(n)

Pros:

* Easy to implement
* Lookup, insert and delete is O(1)
    * Adding/removing/lookup all incredibly fast
* Memory is O(n)
    * Or about 200k addresses * (32 bits per ip hash + 1 byte filename hash) = 1,000k bytes = 1mb total storage
    * Or about 4mb for ipv6 (4x ip address size * 1mb)

Cons:

* Does not support CIDR ip ranges unless we were to expand every ip address range into full IP addresses
    * An /24 would expand to 256 addresses
    * An /16 would expand to 65k addresses
    * An ipv6 address (128 bits) is 4x larger
* Deletion requires locking/synchronization

### Sorted Array

Convert addresses to 32 bit integer and store the addresses in adjacent memory

Lookup: O(log n)
Insert: O(n)
Delete: O(n)
Memory: O(n)

Pros:

* Very simple to implement

Cons:

* Insert and delete is O(n)
* Lookup is O(log n)
* Does not support CIDR ranges

### Binary Tree (or radix tree)

Lookup: O(log n)
Insert: O(log n)
Delete: O(log n)
Memory: O(n)

Each bit in the ip range decends one level into the tree

Pros:

* Lookup, insertion and deletion are all O(log n)
* Can store CIDR ranges
    * Simply store the CIDR ranges within nodes parents
    * Compare for ranges as you descend
* Can use a radix tree to compress the memory usage of single children in the tree

Cons:

* Not quite trivial to implement, especially so w/ radix trees
* may need self balancing, ex: Red-Black trees
    * Increases complexity of implementation

### Bloom Filter

Space efficient probabilistic data struct to check if an element is in a set
    * Allows for false positives
    * Does not allow false negatives

Lookup: O(k)
Insert: O(k)
Delete: O(k) // TODO verify this
Memory: O(k)

k = number of hash functions used

TODO: find out exactly what K might be in this case

Pros:

* Fast lookup, insertion and deletion
* Minimal memory usage
* Can be certain about no false negatives

Cons:

* Must verify using other datastruct on positves as it may be false
* Must expand CIDR ranges on insertion
* Cant support efficiently deleting

## Final Solution

* Use hashtables for non-cidr address storage
* Use bloom filter and tree for cidr addresses
    * Must expand all of the CIDRS
* Tree is used to store CIDRS
* Use multithreading to allow threads to share memory
    * Processes don't allow memory to be shared

### Data storage (in-memory)

For fully defined IP addresses:

Lookup: O(1)
Insert: O(1)
Delete: O(1)
Memory: O(n)

* Hash function: ip -> 32 bit integer
* Use a hash table table to lookup, delete, and insert
* Store the hash table in RAM if possible

For CIDR ranges:

Lookup: O(k + log n)
Insert: O(k + log n)
Delete: O(k + log n)
Memory: O(k + n)

* Use bloom filter for lookup of ip address first
    * If bloom filter is a miss we can be certain address is not blocked
    * If bloom filter hits we must verify w/ tree
* Use Binary Tree or Radix Tree to store the CIDRs
    * Used when Bloom hits

### Loading up the data

* FireHOL files are mounted into process using remote and shared volumes
    * TODO: Research this more and find out how its done
* When the process starts, it should begin to process the HOL files in chunks.
    * Files can be huge, so they can be read chunk by chunk
    * Multithreading can allow for multiple chunks to be processed simultaneously
    * If its read only then no synchronization is necessary for the hashmap (Tree will need synchronization tho)
* Load any non-CIDR address into the hashmap
* Load any CIDR addresses into bloom filter (after expanding the CIDR into an array of addresses)
    * Expanding CIDRs should be multithreaded
* Load CIDR addresses into the tree
    * No need to expand, just load in the bits before the slash

### Dealing w data changes

* Chron thread detects file changes every X seconds
    * 30 sec acceptable?
* When file is added or removed or modified simply restart all processes
    * Must be staggard so avoid outage
* Could implement deletion but would need to synchronize each processes data

### Architecture

* Each process will store duplicate data
    * Bc we want to avoid using external memory storage
* We must have multiple instances of this process running
    * Covers single point of failure
* We must run the process in multiple regions
    * Covers regional failure
* Microservice only needs one endpoint
    * Lookup address is a param
    * 200 or 403 is returned
* Service has a constant heartbeat
* Load balancer in front of handful of instances
    * Round robin is fine
* Auto roll back strategy is a good idea

* Consider some service which sanitizes and serialize the HOL files into compressed files
* Version the sanitized data so if new data 

TODO:
* Can we somehow utilize a sharding strategy? May speed up lookup times, startup times, and reduce memory per process

### Observability

Utilize existing distributed logging service to log:

* Do not log in hotpath, log after response is sent back to client
* Every IP lookup (keep log vSmall) for easy developer debugging
    * Bit for hash hit/miss 
    * Bit for bloom hit/miss
    * Bit for tree hit/miss
    * Total request time
* IN future log fewer of them
* Log loading times on startup for:
    * total loading/processing time of HOL files
    * loading time of hashmap
    * loading time of bloom
    * loading 
* Log any failures for internal errors
* Log any outages
  
Make a dashboard which displays custom metrics for:

* Display metrics across instances
* Size of IP address pool and CIDR pool
* General Hashmap, Tree and Bloom usage and response times
* Time to load in HOL files
* Response times of service
* Frequency the service is hit

Alarms:

* Wake up engineer on call if this service becomes non-responsive
* Even if we fail over to another region we should probably wake someone up
     * Such a hot path could effect all users is something is wrong across all regions
* Flag non urgent alarms for mornning investigatoin

Dev tools:

* Create internal tools to understand if problem is in service or is in frewallHOL organization

### Future Considerations

If files change often we should research:

* Getting the diff of these file changes
* Using deletion in the datastructs instead of restarting them