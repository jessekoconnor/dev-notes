const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Kth Smallest Element in a BST (Medium)
 * ============================================================================
 * 
 * Given the root of a binary search tree, and an integer k, return the kth 
 * smallest value (1-indexed) of all the values of the nodes in the tree.
 * 
 * Example 1:
 *   Input: root = [3,1,4,null,2], k = 1
 *   Output: 1
 * 
 * Example 2:
 *   Input: root = [5,3,6,2,4,null,null,1], k = 3
 *   Output: 3
 * 
 * Constraints:
 *   - The number of nodes in the tree is n.
 *   - 1 <= k <= n <= 10^4
 *   - 0 <= Node.val <= 10^4
 * 
 * Follow up: If the BST is modified often (i.e., we can do insert and delete 
 * operations) and you need to find the kth smallest frequently, how would 
 * you optimize?
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
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const root = arrayToTree([3, 1, 4, null, 2]);
    assertEquals(kthSmallest(root, 1), 1);
});

test('example 2', () => {
    const root = arrayToTree([5, 3, 6, 2, 4, null, null, 1]);
    assertEquals(kthSmallest(root, 3), 3);
});

module.exports = { kthSmallest, TreeNode, arrayToTree };
