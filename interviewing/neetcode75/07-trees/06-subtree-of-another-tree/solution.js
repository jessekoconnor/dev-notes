const { test, assertTrue, assertFalse } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Subtree of Another Tree (Easy)
 * ============================================================================
 * 
 * Given the roots of two binary trees root and subRoot, return true if there 
 * is a subtree of root with the same structure and node values of subRoot 
 * and false otherwise.
 * 
 * A subtree of a binary tree tree is a tree that consists of a node in tree 
 * and all of this node's descendants. The tree tree could also be considered 
 * as a subtree of itself.
 * 
 * Example 1:
 *   Input: root = [3,4,5,1,2], subRoot = [4,1,2]
 *   Output: true
 * 
 * Example 2:
 *   Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
 *   Output: false
 * 
 * Constraints:
 *   - The number of nodes in the root tree is in the range [1, 2000].
 *   - The number of nodes in the subRoot tree is in the range [1, 1000].
 *   - -10^4 <= root.val <= 10^4
 *   - -10^4 <= subRoot.val <= 10^4
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1 - is subtree', () => {
    const root = arrayToTree([3, 4, 5, 1, 2]);
    const subRoot = arrayToTree([4, 1, 2]);
    assertTrue(isSubtree(root, subRoot));
});

test('example 2 - not subtree', () => {
    const root = arrayToTree([3, 4, 5, 1, 2, null, null, null, null, 0]);
    const subRoot = arrayToTree([4, 1, 2]);
    assertFalse(isSubtree(root, subRoot));
});

module.exports = { isSubtree, TreeNode, arrayToTree };
