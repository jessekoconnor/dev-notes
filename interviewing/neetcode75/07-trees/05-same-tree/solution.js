const { test, assertTrue, assertFalse } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Same Tree (Easy)
 * ============================================================================
 * 
 * Given the roots of two binary trees p and q, write a function to check if 
 * they are the same or not.
 * 
 * Two binary trees are considered the same if they are structurally 
 * identical, and the nodes have the same value.
 * 
 * Example 1:
 *   Input: p = [1,2,3], q = [1,2,3]
 *   Output: true
 * 
 * Example 2:
 *   Input: p = [1,2], q = [1,null,2]
 *   Output: false
 * 
 * Example 3:
 *   Input: p = [1,2,1], q = [1,1,2]
 *   Output: false
 * 
 * Constraints:
 *   - The number of nodes in both trees is in the range [0, 100].
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1 - same', () => {
    const p = arrayToTree([1, 2, 3]);
    const q = arrayToTree([1, 2, 3]);
    assertTrue(isSameTree(p, q));
});

test('example 2 - different structure', () => {
    const p = arrayToTree([1, 2]);
    const q = arrayToTree([1, null, 2]);
    assertFalse(isSameTree(p, q));
});

test('example 3 - different values', () => {
    const p = arrayToTree([1, 2, 1]);
    const q = arrayToTree([1, 1, 2]);
    assertFalse(isSameTree(p, q));
});

test('both null', () => {
    assertTrue(isSameTree(null, null));
});

module.exports = { isSameTree, TreeNode, arrayToTree };
