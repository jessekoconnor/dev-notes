const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Diameter of Binary Tree (Easy)
 * ============================================================================
 * 
 * Given the root of a binary tree, return the length of the diameter of the 
 * tree.
 * 
 * The diameter of a binary tree is the length of the longest path between 
 * any two nodes in a tree. This path may or may not pass through the root.
 * 
 * The length of a path between two nodes is represented by the number of 
 * edges between them.
 * 
 * Example 1:
 *   Input: root = [1,2,3,4,5]
 *   Output: 3
 *   Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 * 
 * Example 2:
 *   Input: root = [1,2]
 *   Output: 1
 * 
 * Constraints:
 *   - The number of nodes in the tree is in the range [1, 10^4].
 *   - -100 <= Node.val <= 100
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
function diameterOfBinaryTree(root) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const root = arrayToTree([1, 2, 3, 4, 5]);
    assertEquals(diameterOfBinaryTree(root), 3);
});

test('example 2', () => {
    const root = arrayToTree([1, 2]);
    assertEquals(diameterOfBinaryTree(root), 1);
});

test('single node', () => {
    assertEquals(diameterOfBinaryTree(new TreeNode(1)), 0);
});

module.exports = { diameterOfBinaryTree, TreeNode, arrayToTree };
