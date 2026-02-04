const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Lowest Common Ancestor of a Binary Search Tree (Medium)
 * ============================================================================
 * 
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) 
 * node of two given nodes in the BST.
 * 
 * According to the definition of LCA on Wikipedia: "The lowest common 
 * ancestor is defined between two nodes p and q as the lowest node in T 
 * that has both p and q as descendants (where we allow a node to be a 
 * descendant of itself)."
 * 
 * Example 1:
 *   Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 *   Output: 6
 *   Explanation: The LCA of nodes 2 and 8 is 6.
 * 
 * Example 2:
 *   Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 *   Output: 2
 *   Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a 
 *   descendant of itself according to the LCA definition.
 * 
 * Example 3:
 *   Input: root = [2,1], p = 2, q = 1
 *   Output: 2
 * 
 * Constraints:
 *   - The number of nodes in the tree is in the range [2, 10^5].
 *   - -10^9 <= Node.val <= 10^9
 *   - All Node.val are unique.
 *   - p != q
 *   - p and q will exist in the BST.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const root = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
    const p = new TreeNode(2);
    const q = new TreeNode(8);
    assertEquals(lowestCommonAncestor(root, p, q).val, 6);
});

test('example 2 - one is ancestor', () => {
    const root = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
    const p = new TreeNode(2);
    const q = new TreeNode(4);
    assertEquals(lowestCommonAncestor(root, p, q).val, 2);
});

module.exports = { lowestCommonAncestor, TreeNode, arrayToTree };
