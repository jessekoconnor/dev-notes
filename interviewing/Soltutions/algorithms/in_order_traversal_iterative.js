function iterativeInOrderTraversal(tree, callback) {

    const seen = {};
    let curNode = tree;
    while (curNode !== null) {
      // has left been seen?
      let leftVisitedOrNull = false;
      if (curNode.left !== null) {
        leftVisitedOrNull = seen[curNode.left.value] || false;
      } else {
        leftVisitedOrNull = true; 
      }
  
      // has right been seen?
      let rightVisitedOrNull = false;
      if (curNode.right !== null) {
        rightVisitedOrNull = seen[curNode.right.value] || false;
      } else {
        rightVisitedOrNull = true;
      }
  
      // If we have already visited left, we can process the node if not already processed
      if (leftVisitedOrNull && !seen[curNode.value]) {
        console.log('Observing node in correct order', { node: curNode.value });
        callback(curNode);
        seen[curNode.value] = true;
      }
  
      // If left is not visited go right or up
      if (leftVisitedOrNull) {
        if (!rightVisitedOrNull) {
          curNode = curNode.right;
        } else {
          curNode = curNode.parent;
        }
      } else {
        // Left if not visited, go left
        curNode = curNode.left;
      }
    }
  }
  
  // Do not edit the line below.
  exports.iterativeInOrderTraversal = iterativeInOrderTraversal;