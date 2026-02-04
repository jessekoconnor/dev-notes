var assert = require('assert');

const Heap = require('../src/heap');

const minHeapFunc = (parentVal, childVal) => parentVal > childVal;
const maxHeapFunc = (parentVal, childVal) => parentVal < childVal;

describe('Array', function () {
  describe('MinHeap', function () {

    describe('#insert', function () {
      it('should handle reverse inserts', function () {
        const minHeap = new Heap(minHeapFunc);
  
        minHeap.insert(3);
  
        assert.equal(minHeap.peek(), 3);
  
        minHeap.insert(2);
  
        assert.equal(minHeap.peek(), 2);
  
        minHeap.insert(1);
  
        assert.equal(minHeap.peek(), 1);
      });
    });
  
    describe('#remove', function () {
      it('should handle reverse inserts', function () {
        const minHeap = new Heap(minHeapFunc);
  
        minHeap.insert(3);
        minHeap.insert(2);
        minHeap.insert(1);
  
        assert.equal(minHeap.remove(), 1);
        assert.equal(minHeap.remove(), 2);
        assert.equal(minHeap.remove(), 3);
      });
    });
  
    describe('#replace', function () {
      it('should handle replacing w something thats gotta get sifted all the way down', function () {
        const minHeap = new Heap(minHeapFunc);
  
        minHeap.insert(5);
        minHeap.insert(4);
        minHeap.insert(3);
        minHeap.insert(2);
        minHeap.insert(1);
  
        
        assert.equal(minHeap.replace(6), 1);
  
        // 2 should be on top
        assert.equal(minHeap.peek(), 2);
        
        assert.equal(minHeap.replace(0), 2);
  
        // 0 should remain on top
        assert.equal(minHeap.peek(), 0);
      });
    });

    describe('#floydBuildHeapBottomUp', function () {
      it('should build a heap from an array', function () {
        const minHeap = new Heap(minHeapFunc);
  
        minHeap.floydBuildHeapBottomUp([5,4,3,2,1]);

        minHeap.print();
  
        assert.equal(minHeap.remove(), 1);
        assert.equal(minHeap.remove(), 2);
        assert.equal(minHeap.remove(), 3);
        assert.equal(minHeap.remove(), 4);
        assert.equal(minHeap.remove(), 5);
      });
    });
  });

  describe('MaxHeap', function () {
    describe('#insert', function () {
      it('should handle reverse inserts', function () {
        const maxHeap = new Heap(maxHeapFunc);
  
        maxHeap.insert(1);
  
        assert.equal(maxHeap.peek(), 1);
  
        maxHeap.insert(2);
  
        assert.equal(maxHeap.peek(), 2);
  
        maxHeap.insert(3);
  
        assert.equal(maxHeap.peek(), 3);
      });
    });

    describe('#remove', function () {
      it('should handle reverse inserts', function () {
        const maxHeap = new Heap(maxHeapFunc);
  
        maxHeap.insert(1);
        maxHeap.insert(2);
        maxHeap.insert(3);
  
        assert.equal(maxHeap.remove(), 3);
        assert.equal(maxHeap.remove(), 2);
        assert.equal(maxHeap.remove(), 1);
      });
    });

    describe('#replace', function () {
      it('should handle replacing w something thats gotta get sifted all the way down', function () {
        const maxHeap = new Heap(maxHeapFunc);
  
        maxHeap.insert(1);
        maxHeap.insert(2);
        maxHeap.insert(3);
        maxHeap.insert(4);
        maxHeap.insert(5);
  
        
        assert.equal(maxHeap.replace(0), 5);
  
        // 4 should be on top
        assert.equal(maxHeap.peek(), 4);
        
        assert.equal(maxHeap.replace(6), 4);
  
        // 6 should remain on top
        assert.equal(maxHeap.peek(), 6);
      });
    });
  });

  describe('MinHeap of Objects', function () {
    it('should handle reverse inserts', function () {
      const objectsShouldSwapMinHeap = (parent, child) => {
        return parent?.val > child?.val
      };
      const minHeap = new Heap(objectsShouldSwapMinHeap);

      const obj3 = { val: 3 };
      const obj2 = { val: 2 };
      const obj1 = { val: 1 };

      minHeap.insert(obj3);

      minHeap.print();

      assert.equal(minHeap.peek(), obj3);

      minHeap.insert(obj2);

      minHeap.print();

      assert.equal(minHeap.peek(), obj2);

      minHeap.insert(obj1);

      assert.equal(minHeap.peek(), obj1);
    });
  })
});