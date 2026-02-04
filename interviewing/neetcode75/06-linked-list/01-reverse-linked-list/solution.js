const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Reverse Linked List (Easy)
 * ============================================================================
 * 
 * Given the head of a singly linked list, reverse the list, and return the 
 * reversed list.
 * 
 * Example 1:
 *   Input: head = [1,2,3,4,5]
 *   Output: [5,4,3,2,1]
 * 
 * Example 2:
 *   Input: head = [1,2]
 *   Output: [2,1]
 * 
 * Example 3:
 *   Input: head = []
 *   Output: []
 * 
 * Constraints:
 *   - The number of nodes in the list is the range [0, 5000].
 *   - -5000 <= Node.val <= 5000
 * 
 * Follow up: A linked list can be reversed either iteratively or recursively. 
 * Could you implement both?
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
 * @return {ListNode}
 */
function reverseList(head) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    assertEquals(listToArray(reverseList(head)), [5, 4, 3, 2, 1]);
});

test('example 2', () => {
    const head = arrayToList([1, 2]);
    assertEquals(listToArray(reverseList(head)), [2, 1]);
});

test('example 3 - empty', () => {
    assertEquals(listToArray(reverseList(null)), []);
});

test('single node', () => {
    const head = arrayToList([1]);
    assertEquals(listToArray(reverseList(head)), [1]);
});

module.exports = { reverseList, ListNode, arrayToList, listToArray };
