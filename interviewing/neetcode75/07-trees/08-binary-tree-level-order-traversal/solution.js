const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Binary Tree Level Order Traversal (Medium)
 * ============================================================================
 * 
 * Given the root of a binary tree, return the level order traversal of its 
 * nodes' values. (i.e., from left to right, level by level).
 * 
 * Example 1:
 *   Input: root = [3,9,20,null,null,15,7]
 *   Output: [[3],[9,20],[15,7]]
 * 
 * Example 2:
 *   Input: root = [1]
 *   Output: [[1]]
 * 
 * Example 3:
 *   Input: root = []
 *   Output: []
 * 
 * Constraints:
 *   - The number of nodes in the tree is in the range [0, 2000].
 *   - -1000 <= Node.val <= 1000
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
 * @return {number[][]}
 */
function levelOrder(root) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
    assertEquals(levelOrder(root), [[3], [9, 20], [15, 7]]);
});

test('example 2 - single node', () => {
    const root = arrayToTree([1]);
    assertEquals(levelOrder(root), [[1]]);
});

test('example 3 - empty', () => {
    assertEquals(levelOrder(null), []);
});

module.exports = { levelOrder, TreeNode, arrayToTree };
