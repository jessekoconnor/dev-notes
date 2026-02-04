const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Construct Binary Tree from Preorder and Inorder Traversal (Medium)
 * ============================================================================
 * 
 * Given two integer arrays preorder and inorder where preorder is the 
 * preorder traversal of a binary tree and inorder is the inorder traversal 
 * of the same tree, construct and return the binary tree.
 * 
 * Example 1:
 *   Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 *   Output: [3,9,20,null,null,15,7]
 * 
 * Example 2:
 *   Input: preorder = [-1], inorder = [-1]
 *   Output: [-1]
 * 
 * Constraints:
 *   - 1 <= preorder.length <= 3000
 *   - inorder.length == preorder.length
 *   - -3000 <= preorder[i], inorder[i] <= 3000
 *   - preorder and inorder consist of unique values.
 *   - Each value of inorder also appears in preorder.
 *   - preorder is guaranteed to be the preorder traversal of the tree.
 *   - inorder is guaranteed to be the inorder traversal of the tree.
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

function treeToArray(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    while (result.length && result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const result = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
    assertEquals(treeToArray(result), [3, 9, 20, null, null, 15, 7]);
});

test('example 2 - single node', () => {
    const result = buildTree([-1], [-1]);
    assertEquals(treeToArray(result), [-1]);
});

module.exports = { buildTree, TreeNode, treeToArray };
