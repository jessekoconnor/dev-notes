const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Longest Increasing Subsequence (Medium)
 * ============================================================================
 * 
 * Given an integer array nums, return the length of the longest strictly 
 * increasing subsequence.
 * 
 * Example 1:
 *   Input: nums = [10,9,2,5,3,7,101,18]
 *   Output: 4
 *   Explanation: The longest increasing subsequence is [2,3,7,101], therefore 
 *   the length is 4.
 * 
 * Example 2:
 *   Input: nums = [0,1,0,3,2,3]
 *   Output: 4
 * 
 * Example 3:
 *   Input: nums = [7,7,7,7,7,7,7]
 *   Output: 1
 * 
 * Constraints:
 *   - 1 <= nums.length <= 2500
 *   - -10^4 <= nums[i] <= 10^4
 * 
 * Follow up: Can you come up with an algorithm that runs in O(n log(n)) time?
 * 
 * ============================================================================
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    assertEquals(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4);
});

test('example 2', () => {
    assertEquals(lengthOfLIS([0, 1, 0, 3, 2, 3]), 4);
});

test('example 3 - all same', () => {
    assertEquals(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]), 1);
});

module.exports = { lengthOfLIS };
