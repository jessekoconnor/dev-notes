const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Reverse Nodes in k-Group (Hard)
 * ============================================================================
 * 
 * Given the head of a linked list, reverse the nodes of the list k at a 
 * time, and return the modified list.
 * 
 * k is a positive integer and is less than or equal to the length of the 
 * linked list. If the number of nodes is not a multiple of k then left-out 
 * nodes, in the end, should remain as it is.
 * 
 * You may not alter the values in the list's nodes, only nodes themselves 
 * may be changed.
 * 
 * Example 1:
 *   Input: head = [1,2,3,4,5], k = 2
 *   Output: [2,1,4,3,5]
 * 
 * Example 2:
 *   Input: head = [1,2,3,4,5], k = 3
 *   Output: [3,2,1,4,5]
 * 
 * Constraints:
 *   - The number of nodes in the list is n.
 *   - 1 <= k <= n <= 5000
 *   - 0 <= Node.val <= 1000
 * 
 * Follow-up: Can you solve the problem in O(1) extra memory space?
 * 
 * ============================================================================
 */

// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function arrayToList(arr) {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function listToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1 - k=2', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    assertEquals(listToArray(reverseKGroup(head, 2)), [2, 1, 4, 3, 5]);
});

test('example 2 - k=3', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    assertEquals(listToArray(reverseKGroup(head, 3)), [3, 2, 1, 4, 5]);
});

module.exports = { reverseKGroup, ListNode, arrayToList, listToArray };
