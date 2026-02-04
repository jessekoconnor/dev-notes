const { test, assertTrue, assertFalse } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Balanced Binary Tree (Easy)
 * ============================================================================
 * 
 * Given a binary tree, determine if it is height-balanced.
 * 
 * A height-balanced binary tree is a binary tree in which the depth of the 
 * two subtrees of every node never differs by more than one.
 * 
 * Example 1:
 *   Input: root = [3,9,20,null,null,15,7]
 *   Output: true
 * 
 * Example 2:
 *   Input: root = [1,2,2,3,3,null,null,4,4]
 *   Output: false
 * 
 * Example 3:
 *   Input: root = []
 *   Output: true
 * 
 * Constraints:
 *   - The number of nodes in the tree is in the range [0, 5000].
 *   - -10^4 <= Node.val <= 10^4
 * 
 * ============================================================================
 */

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function arrayToTree(arr) {
    if (!arr.length || arr[0] === null) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        const node = queue.shift();
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1 - balanced', () => {
    const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
    assertTrue(isBalanced(root));
});

test('example 2 - not balanced', () => {
    const root = arrayToTree([1, 2, 2, 3, 3, null, null, 4, 4]);
    assertFalse(isBalanced(root));
});

test('example 3 - empty', () => {
    assertTrue(isBalanced(null));
});

module.exports = { isBalanced, TreeNode, arrayToTree };
