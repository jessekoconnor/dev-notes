const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Merge Two Sorted Lists (Easy)
 * ============================================================================
 * 
 * You are given the heads of two sorted linked lists list1 and list2.
 * 
 * Merge the two lists into one sorted list. The list should be made by 
 * splicing together the nodes of the first two lists.
 * 
 * Return the head of the merged linked list.
 * 
 * Example 1:
 *   Input: list1 = [1,2,4], list2 = [1,3,4]
 *   Output: [1,1,2,3,4,4]
 * 
 * Example 2:
 *   Input: list1 = [], list2 = []
 *   Output: []
 * 
 * Example 3:
 *   Input: list1 = [], list2 = [0]
 *   Output: [0]
 * 
 * Constraints:
 *   - The number of nodes in both lists is in the range [0, 50].
 *   - -100 <= Node.val <= 100
 *   - Both list1 and list2 are sorted in non-decreasing order.
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const list1 = arrayToList([1, 2, 4]);
    const list2 = arrayToList([1, 3, 4]);
    assertEquals(listToArray(mergeTwoLists(list1, list2)), [1, 1, 2, 3, 4, 4]);
});

test('example 2 - both empty', () => {
    assertEquals(listToArray(mergeTwoLists(null, null)), []);
});

test('example 3 - one empty', () => {
    const list2 = arrayToList([0]);
    assertEquals(listToArray(mergeTwoLists(null, list2)), [0]);
});

module.exports = { mergeTwoLists, ListNode, arrayToList, listToArray };
