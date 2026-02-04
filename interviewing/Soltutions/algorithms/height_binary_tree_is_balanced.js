class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  let isbalanced = true;
  function heightBalancedBinaryTree2(tree,) {
  
    if (!isbalanced) return false;
    if (!tree) return -1;
  
    const leftHeight = 1 + heightBalancedBinaryTree2(tree.left);
    const rightHeight = 1 + heightBalancedBinaryTree2(tree.right);
  
    console.log('afterRecursion', { tree, leftHeight, rightHeight });
  
    if (Math.abs(leftHeight - rightHeight) > 1) {
      console.log('*** bad hegiht found');
      isbalanced = false;
    }
    
    // Write your code here.
    return Math.max(leftHeight, rightHeight);
  }
  
  function heightBalancedBinaryTree(tree) {
    isbalanced = true;
    heightBalancedBinaryTree2(tree);
    return isbalanced;
  }