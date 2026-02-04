const { test, assertTrue, assertFalse } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Validate Binary Search Tree (Medium)
 * ============================================================================
 * 
 * Given the root of a binary tree, determine if it is a valid binary search 
 * tree (BST).
 * 
 * A valid BST is defined as follows:
 *   - The left subtree of a node contains only nodes with keys less than 
 *     the node's key.
 *   - The right subtree of a node contains only nodes with keys greater 
 *     than the node's key.
 *   - Both the left and right subtrees must also be binary search trees.
 * 
 * Example 1:
 *   Input: root = [2,1,3]
 *   Output: true
 * 
 * Example 2:
 *   Input: root = [5,1,4,null,null,3,6]
 *   Output: false
 *   Explanation: The root node's value is 5 but its right child's value is 4.
 * 
 * Constraints:
 *   - The number of nodes in the tree is in the range [1, 10^4].
 *   - -2^31 <= Node.val <= 2^31 - 1
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
function isValidBST(root) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1 - valid BST', () => {
    const root = arrayToTree([2, 1, 3]);
    assertTrue(isValidBST(root));
});

test('example 2 - invalid BST', () => {
    const root = arrayToTree([5, 1, 4, null, null, 3, 6]);
    assertFalse(isValidBST(root));
});

test('single node', () => {
    assertTrue(isValidBST(new TreeNode(1)));
});

module.exports = { isValidBST, TreeNode, arrayToTree };
