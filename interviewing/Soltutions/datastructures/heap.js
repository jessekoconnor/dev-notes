
class Heap {
    // const minHeapShouldSwapFunc = (parentVal, childVal) => parentVal < childVal;
    // const maxHeapShouldSwapFunc = (parentVal, childVal) => parentVal > childVal;
    
    constructor(shouldSwapFunc) {
        this.heap = [];
        this.shouldSwapFunc = shouldSwapFunc;
    }
    
    insert(listElem) {
        this.heap.push(listElem);
        this.siftUp();
    }
    
    replace(toInsert) {
        let top = this.heap[0];
        this.heap[0] = toInsert;
        this.siftDown();
        return top;
    }
    
    remove() {
        let top = this.heap[0];
        if (this.heap.length === 1) {
            this.heap = [];
        } else {
            const lastElem = this.heap.pop();
            this.heap[0] = lastElem;
            this.siftDown();
        }

        return top;
    }
    
    peek() {
        return this.heap[0];
    }
    
    swap(i,j) {
        const iVal = this.heap[i];
        const jVal = this.heap[j];
        
        this.heap[j] = iVal;
        this.heap[i] = jVal;
    }
    
    siftDown(parentIndex = 0) {
        // Indexes and values of children
        const childIndexes = [2*parentIndex+1, 2*parentIndex+2];
        const childVals = [
            this.heap[childIndexes[0]],
            this.heap[childIndexes[1]]
        ];

        // parentVal
        const parentVal = this.heap[parentIndex];

        // find max val and index, init from parent
        let max = { val: parentVal, index: -1 };
        childVals.forEach((val, index) => {
            if (this.shouldSwapFunc(max.val, val)) {
                max.val = val;
                max.index = index;
            }
        });

        // Parent was zero index, so swap if greater than zero
        if (max.index > -1) {
            const childIndex = childIndexes[max.index];
            this.swap(parentIndex, childIndex);
            this.siftDown(childIndex);
        }
    }

    siftUp(childIndex = this.heap.length - 1) {
        let parentIndex = Math.floor((childIndex - 1)/2)

        let parent = this.heap[parentIndex];
        let child = this.heap[childIndex];
        
        if (this.shouldSwapFunc(parent, child)) {
            this.swap(parentIndex, childIndex);
            this.siftUp(parentIndex);
        }
    }

    // Floyd's algorithm: builds balanced heap from existing array in O(n) time
    floydBuildHeapBottomUp(existingArray) {
        this.heap = existingArray;
        let lastParentIndex = Math.floor(this.heap.length/2) - 1;
        for (let i = this.heap.length-1; i >= 0; i--) {
            this.siftDown(i);
        }
        return this.heap;
    }
    
    print(str = '') {
        console.log(str, this.heap);
    }
    
    len() {
        return this.heap.length;
    }
}

module.exports = Heap;