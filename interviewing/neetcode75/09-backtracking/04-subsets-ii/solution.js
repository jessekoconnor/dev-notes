const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Subsets II (Medium)
 * ============================================================================
 * 
 * Given an integer array nums that may contain duplicates, return all 
 * possible subsets (the power set).
 * 
 * The solution set must not contain duplicate subsets. Return the solution 
 * in any order.
 * 
 * Example 1:
 *   Input: nums = [1,2,2]
 *   Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * 
 * Example 2:
 *   Input: nums = [0]
 *   Output: [[],[0]]
 * 
 * Constraints:
 *   - 1 <= nums.length <= 10
 *   - -10 <= nums[i] <= 10
 * 
 * ============================================================================
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const result = subsetsWithDup([1, 2, 2]);
    assertEquals(result.length, 6);
});

test('example 2', () => {
    const result = subsetsWithDup([0]);
    assertEquals(result.length, 2);
});

module.exports = { subsetsWithDup };
