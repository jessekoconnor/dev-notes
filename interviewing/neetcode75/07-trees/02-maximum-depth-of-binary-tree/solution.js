const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Maximum Depth of Binary Tree (Easy)
 * ============================================================================
 * 
 * Given the root of a binary tree, return its maximum depth.
 * 
 * A binary tree's maximum depth is the number of nodes along the longest 
 * path from the root node down to the farthest leaf node.
 * 
 * Example 1:
 *   Input: root = [3,9,20,null,null,15,7]
 *   Output: 3
 * 
 * Example 2:
 *   Input: root = [1,null,2]
 *   Output: 2
 * 
 * Constraints:
 *   - The number of nodes in the tree is in the range [0, 10^4].
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
 * @return {number}
 */
function maxDepth(root) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
    assertEquals(maxDepth(root), 3);
});

test('example 2', () => {
    const root = arrayToTree([1, null, 2]);
    assertEquals(maxDepth(root), 2);
});

test('empty tree', () => {
    assertEquals(maxDepth(null), 0);
});

test('single node', () => {
    assertEquals(maxDepth(new TreeNode(1)), 1);
});

module.exports = { maxDepth, TreeNode, arrayToTree };
