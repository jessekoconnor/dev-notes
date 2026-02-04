const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Remove Nth Node From End of List (Medium)
 * ============================================================================
 * 
 * Given the head of a linked list, remove the nth node from the end of the 
 * list and return its head.
 * 
 * Example 1:
 *   Input: head = [1,2,3,4,5], n = 2
 *   Output: [1,2,3,5]
 * 
 * Example 2:
 *   Input: head = [1], n = 1
 *   Output: []
 * 
 * Example 3:
 *   Input: head = [1,2], n = 1
 *   Output: [1]
 * 
 * Constraints:
 *   - The number of nodes in the list is sz.
 *   - 1 <= sz <= 30
 *   - 0 <= Node.val <= 100
 *   - 1 <= n <= sz
 * 
 * Follow up: Could you do this in one pass?
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

// Helper to convert array to linked list
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

// Helper to convert linked list to array
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
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    assertEquals(listToArray(removeNthFromEnd(head, 2)), [1, 2, 3, 5]);
});

test('example 2 - single node', () => {
    const head = arrayToList([1]);
    assertEquals(listToArray(removeNthFromEnd(head, 1)), []);
});

test('example 3', () => {
    const head = arrayToList([1, 2]);
    assertEquals(listToArray(removeNthFromEnd(head, 1)), [1]);
});

module.exports = { removeNthFromEnd, ListNode, arrayToList, listToArray };
