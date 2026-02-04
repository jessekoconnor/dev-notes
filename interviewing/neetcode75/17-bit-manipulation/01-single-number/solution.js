const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Single Number (Easy)
 * ============================================================================
 * 
 * Given a non-empty array of integers nums, every element appears twice 
 * except for one. Find that single one.
 * 
 * You must implement a solution with a linear runtime complexity and use 
 * only constant extra space.
 * 
 * Example 1:
 *   Input: nums = [2,2,1]
 *   Output: 1
 * 
 * Example 2:
 *   Input: nums = [4,1,2,1,2]
 *   Output: 4
 * 
 * Example 3:
 *   Input: nums = [1]
 *   Output: 1
 * 
 * Constraints:
 *   - 1 <= nums.length <= 3 * 10^4
 *   - -3 * 10^4 <= nums[i] <= 3 * 10^4
 *   - Each element in the array appears twice except for one element which 
 *     appears only once.
 * 
 * ============================================================================
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    // TODO: Implement solution (XOR)
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    assertEquals(singleNumber([2, 2, 1]), 1);
});

test('example 2', () => {
    assertEquals(singleNumber([4, 1, 2, 1, 2]), 4);
});

test('example 3', () => {
    assertEquals(singleNumber([1]), 1);
});

module.exports = { singleNumber };
