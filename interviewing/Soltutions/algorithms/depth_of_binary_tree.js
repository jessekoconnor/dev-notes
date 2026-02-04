function nodeDepths(root, depth = 0) {
    // Write your code here.
    
    if (!root) return 0;
  
    // recurse left/right
    const leftSum = nodeDepths(root.left, depth + 1);
    const rightSum = nodeDepths(root.right, depth + 1);
  
    let sum = 0;
    // Add current nodes depth to sum
    if (depth > 0) {
      sum += depth;
    }
    // Also add lower tree node depths returned from recursion
    // This links lower call stacks to higher call stacks
    sum += leftSum + rightSum;
  
    return sum;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }