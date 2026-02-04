const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Binary Tree Right Side View (Medium)
 * ============================================================================
 * 
 * Given the root of a binary tree, imagine yourself standing on the right 
 * side of it, return the values of the nodes you can see ordered from top 
 * to bottom.
 * 
 * Example 1:
 *   Input: root = [1,2,3,null,5,null,4]
 *   Output: [1,3,4]
 * 
 * Example 2:
 *   Input: root = [1,null,3]
 *   Output: [1,3]
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
 * @return {number[]}
 */
function rightSideView(root) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const root = arrayToTree([1, 2, 3, null, 5, null, 4]);
    assertEquals(rightSideView(root), [1, 3, 4]);
});

test('example 2', () => {
    const root = arrayToTree([1, null, 3]);
    assertEquals(rightSideView(root), [1, 3]);
});

test('example 3 - empty', () => {
    assertEquals(rightSideView(null), []);
});

module.exports = { rightSideView, TreeNode, arrayToTree };
