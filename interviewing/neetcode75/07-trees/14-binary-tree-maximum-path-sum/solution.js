const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Binary Tree Maximum Path Sum (Hard)
 * ============================================================================
 * 
 * A path in a binary tree is a sequence of nodes where each pair of adjacent 
 * nodes in the sequence has an edge connecting them. A node can only appear 
 * in the sequence at most once. Note that the path does not need to pass 
 * through the root.
 * 
 * The path sum of a path is the sum of the node's values in the path.
 * 
 * Given the root of a binary tree, return the maximum path sum of any 
 * non-empty path.
 * 
 * Example 1:
 *   Input: root = [1,2,3]
 *   Output: 6
 *   Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 
 *   2 + 1 + 3 = 6.
 * 
 * Example 2:
 *   Input: root = [-10,9,20,null,null,15,7]
 *   Output: 42
 *   Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 
 *   15 + 20 + 7 = 42.
 * 
 * Constraints:
 *   - The number of nodes in the tree is in the range [1, 3 * 10^4].
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
 * @return {number}
 */
function maxPathSum(root) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const root = arrayToTree([1, 2, 3]);
    assertEquals(maxPathSum(root), 6);
});

test('example 2', () => {
    const root = arrayToTree([-10, 9, 20, null, null, 15, 7]);
    assertEquals(maxPathSum(root), 42);
});

test('single negative node', () => {
    assertEquals(maxPathSum(new TreeNode(-3)), -3);
});

module.exports = { maxPathSum, TreeNode, arrayToTree };
