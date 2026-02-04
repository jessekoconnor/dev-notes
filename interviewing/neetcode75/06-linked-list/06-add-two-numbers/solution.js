const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Add Two Numbers (Medium)
 * ============================================================================
 * 
 * You are given two non-empty linked lists representing two non-negative 
 * integers. The digits are stored in reverse order, and each of their nodes 
 * contains a single digit. Add the two numbers and return the sum as a 
 * linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except 
 * the number 0 itself.
 * 
 * Example 1:
 *   Input: l1 = [2,4,3], l2 = [5,6,4]
 *   Output: [7,0,8]
 *   Explanation: 342 + 465 = 807.
 * 
 * Example 2:
 *   Input: l1 = [0], l2 = [0]
 *   Output: [0]
 * 
 * Example 3:
 *   Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 *   Output: [8,9,9,9,0,0,0,1]
 * 
 * Constraints:
 *   - The number of nodes in each linked list is in the range [1, 100].
 *   - 0 <= Node.val <= 9
 *   - It is guaranteed that the list represents a number that does not have 
 *     leading zeros.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const l1 = arrayToList([2, 4, 3]);
    const l2 = arrayToList([5, 6, 4]);
    assertEquals(listToArray(addTwoNumbers(l1, l2)), [7, 0, 8]);
});

test('example 2', () => {
    const l1 = arrayToList([0]);
    const l2 = arrayToList([0]);
    assertEquals(listToArray(addTwoNumbers(l1, l2)), [0]);
});

test('example 3 - with carry', () => {
    const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = arrayToList([9, 9, 9, 9]);
    assertEquals(listToArray(addTwoNumbers(l1, l2)), [8, 9, 9, 9, 0, 0, 0, 1]);
});

module.exports = { addTwoNumbers, ListNode, arrayToList, listToArray };
