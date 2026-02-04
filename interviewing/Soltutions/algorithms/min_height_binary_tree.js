let root;
function minHeightBst(array) {
  root = minHeightBstRecursive(array, null);
  return root;
}

function minHeightBstRecursive(array, root = null, depth = 0) {
  // Write your code here.

  if (!array.length) return root;

  // Get middle value
  const pivotSize = Math.floor(array.length / 2);
  const pivotVal = array[pivotSize];

  // console.log({ pivotSize, pivotVal, array, depth })
  
  if (!root) root = new BST(pivotVal);
  else {
    root.insert(pivotVal);
  }

  const left = array.slice(0, pivotSize);
  const right = array.slice(pivotSize + 1);
  // console.log('debug1 before rec', { left, right, root, depth })
  minHeightBstRecursive(left, root, depth+1);
  minHeightBstRecursive(right, root, depth+1);
  // console.log('debug1 after rec', { left, right, root, depth })


  return root;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}