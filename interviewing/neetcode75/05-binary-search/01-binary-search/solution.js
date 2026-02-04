const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Binary Search (Easy)
 * ============================================================================
 * 
 * Given an array of integers nums which is sorted in ascending order, and an 
 * integer target, write a function to search target in nums. If target 
 * exists, then return its index. Otherwise, return -1.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 *   Input: nums = [-1,0,3,5,9,12], target = 9
 *   Output: 4
 *   Explanation: 9 exists in nums and its index is 4
 * 
 * Example 2:
 *   Input: nums = [-1,0,3,5,9,12], target = 2
 *   Output: -1
 *   Explanation: 2 does not exist in nums so return -1
 * 
 * Constraints:
 *   - 1 <= nums.length <= 10^4
 *   - -10^4 < nums[i], target < 10^4
 *   - All the integers in nums are unique.
 *   - nums is sorted in ascending order.
 * 
 * ============================================================================
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1 - found', () => {
    assertEquals(search([-1, 0, 3, 5, 9, 12], 9), 4);
});

test('example 2 - not found', () => {
    assertEquals(search([-1, 0, 3, 5, 9, 12], 2), -1);
});

test('single element - found', () => {
    assertEquals(search([5], 5), 0);
});

test('single element - not found', () => {
    assertEquals(search([5], 3), -1);
});

module.exports = { search };
