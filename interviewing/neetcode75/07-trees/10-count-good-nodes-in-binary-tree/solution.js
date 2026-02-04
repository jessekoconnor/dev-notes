const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Count Good Nodes in Binary Tree (Medium)
 * ============================================================================
 * 
 * Given a binary tree root, a node X in the tree is named good if in the 
 * path from root to X there are no nodes with a value greater than X.
 * 
 * Return the number of good nodes in the binary tree.
 * 
 * Example 1:
 *   Input: root = [3,1,4,3,null,1,5]
 *   Output: 4
 *   Explanation: Nodes in blue are good.
 *   Root Node (3) is always a good node.
 *   Node 4 -> (3,4) is the maximum value in the path starting from the root.
 *   Node 5 -> (3,4,5) is the maximum value in the path
 *   Node 3 -> (3,1,3) is the maximum value in the path.
 * 
 * Example 2:
 *   Input: root = [3,3,null,4,2]
 *   Output: 3
 *   Explanation: Node 2 -> (3,3,2) is not good, because "3" is higher than it.
 * 
 * Example 3:
 *   Input: root = [1]
 *   Output: 1
 *   Explanation: Root is considered as good.
 * 
 * Constraints:
 *   - The number of nodes in the binary tree is in the range [1, 10^5].
 *   - Each node's value is between [-10^4, 10^4].
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
function goodNodes(root) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const root = arrayToTree([3, 1, 4, 3, null, 1, 5]);
    assertEquals(goodNodes(root), 4);
});

test('example 2', () => {
    const root = arrayToTree([3, 3, null, 4, 2]);
    assertEquals(goodNodes(root), 3);
});

test('example 3 - single node', () => {
    assertEquals(goodNodes(new TreeNode(1)), 1);
});

module.exports = { goodNodes, TreeNode, arrayToTree };
