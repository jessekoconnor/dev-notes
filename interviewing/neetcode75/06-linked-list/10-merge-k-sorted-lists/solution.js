const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Merge k Sorted Lists (Hard)
 * ============================================================================
 * 
 * You are given an array of k linked-lists lists, each linked-list is sorted 
 * in ascending order.
 * 
 * Merge all the linked-lists into one sorted linked-list and return it.
 * 
 * Example 1:
 *   Input: lists = [[1,4,5],[1,3,4],[2,6]]
 *   Output: [1,1,2,3,4,4,5,6]
 *   Explanation: The linked-lists are:
 *     [1->4->5, 1->3->4, 2->6]
 *   merging them into one sorted list:
 *     1->1->2->3->4->4->5->6
 * 
 * Example 2:
 *   Input: lists = []
 *   Output: []
 * 
 * Example 3:
 *   Input: lists = [[]]
 *   Output: []
 * 
 * Constraints:
 *   - k == lists.length
 *   - 0 <= k <= 10^4
 *   - 0 <= lists[i].length <= 500
 *   - -10^4 <= lists[i][j] <= 10^4
 *   - lists[i] is sorted in ascending order.
 *   - The sum of lists[i].length will not exceed 10^4.
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const lists = [
        arrayToList([1, 4, 5]),
        arrayToList([1, 3, 4]),
        arrayToList([2, 6])
    ];
    assertEquals(listToArray(mergeKLists(lists)), [1, 1, 2, 3, 4, 4, 5, 6]);
});

test('example 2 - empty array', () => {
    assertEquals(listToArray(mergeKLists([])), []);
});

test('example 3 - array with empty list', () => {
    assertEquals(listToArray(mergeKLists([null])), []);
});

module.exports = { mergeKLists, ListNode, arrayToList, listToArray };
