const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Serialize and Deserialize Binary Tree (Hard)
 * ============================================================================
 * 
 * Serialization is the process of converting a data structure or object into 
 * a sequence of bits so that it can be stored in a file or memory buffer, or 
 * transmitted across a network connection link to be reconstructed later in 
 * the same or another computer environment.
 * 
 * Design an algorithm to serialize and deserialize a binary tree. There is 
 * no restriction on how your serialization/deserialization algorithm should 
 * work. You just need to ensure that a binary tree can be serialized to a 
 * string and this string can be deserialized to the original tree structure.
 * 
 * Example 1:
 *   Input: root = [1,2,3,null,null,4,5]
 *   Output: [1,2,3,null,null,4,5]
 * 
 * Example 2:
 *   Input: root = []
 *   Output: []
 * 
 * Constraints:
 *   - The number of nodes in the tree is in the range [0, 10^4].
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

function treeToArray(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    while (result.length && result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

/**
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
    // TODO: Implement solution
}

/**
 * Decodes your encoded data to tree.
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const root = arrayToTree([1, 2, 3, null, null, 4, 5]);
    const serialized = serialize(root);
    const deserialized = deserialize(serialized);
    assertEquals(treeToArray(deserialized), [1, 2, 3, null, null, 4, 5]);
});

test('example 2 - empty tree', () => {
    const serialized = serialize(null);
    const deserialized = deserialize(serialized);
    assertEquals(treeToArray(deserialized), []);
});

module.exports = { serialize, deserialize, TreeNode, arrayToTree, treeToArray };
