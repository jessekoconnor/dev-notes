const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Invert Binary Tree (Easy)
 * ============================================================================
 * 
 * Given the root of a binary tree, invert the tree, and return its root.
 * 
 * Example 1:
 *   Input: root = [4,2,7,1,3,6,9]
 *   Output: [4,7,2,9,6,3,1]
 * 
 * Example 2:
 *   Input: root = [2,1,3]
 *   Output: [2,3,1]
 * 
 * Example 3:
 *   Input: root = []
 *   Output: []
 * 
 * Constraints:
 *   - The number of nodes in the tree is in the range [0, 100].
 *   - -100 <= Node.val <= 100
 * 
 * ============================================================================
 */

// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Helper to build tree from array (level-order)
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

// Helper to convert tree to array (level-order)
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
    // Remove trailing nulls
    while (result.length && result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const root = arrayToTree([4, 2, 7, 1, 3, 6, 9]);
    assertEquals(treeToArray(invertTree(root)), [4, 7, 2, 9, 6, 3, 1]);
});

test('example 2', () => {
    const root = arrayToTree([2, 1, 3]);
    assertEquals(treeToArray(invertTree(root)), [2, 3, 1]);
});

test('example 3 - empty', () => {
    assertEquals(treeToArray(invertTree(null)), []);
});

module.exports = { invertTree, TreeNode, arrayToTree, treeToArray };
