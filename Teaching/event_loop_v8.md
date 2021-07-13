# Event loop

JavaScript has a **concurrency model** based on an event loop, which is responsible
for executing the code, collecting and processing events, and executing queued
sub-tasks. This model is quite different from models in other languages like C
and Java.

[MDN Definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

## Concurrency

[Concurrency Definition Wikipedia](https://en.wikipedia.org/wiki/Concurrency_(computer_science))

Concurrency is the ability of different parts or units of a program, algorithm,
or problem to be executed out-of-order or at the same time.

This allows for parallel execution of the concurrent units, *which can
significantly improve overall speed* of the execution in multi-processor and
multi-core systems.

In more technical terms, concurrency refers to the decomposability of a program,
algorithm, or problem into order-independent or partially-ordered components or
units of computation.

## Event loop


# Examples

## Stack Frames

Given this code:

```javascript
function foo(b) {
  let a = 10;
  return a + b + 11;
}

function bar(x) {
  let y = 3;
  return foo(x * y);
}

console.log(bar(7)); //returns 42
```

42

Stack Illustration:

```javascript

 -------
| Stack |  

(ex: 'bar()': { args: [], localVars: {}, return: '' })
```

## Message Queue

Code:

```javascript
function bar(x) {
  let y = 3;
  return x * y;
}

button.onClick(bar(7));
```

Queue Illustration:

```javascript
| STACK
 -------  ----------------------------
| Stack |  { type: 'click',  }  | <- Queue

(ex event: { type: 'click',  })
```

## "Run-to-completion"

Adv: ""
Dis: "Can block user events on long running "


Visual Diagram:
* Good one here: https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

* Dynamic Visualization tool:
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


Recursion:

* Default frame is 984 kilobytes.
  (https://stackoverflow.com/questions/20748061/what-is-the-default-stack-size-in-node-js)
* Default heap size is 1400 megabytes
* Since 1mb = 1000kb, the heap is ~1500 times larger than the stack
