const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Permutations (Medium)
 * ============================================================================
 * 
 * Given an array nums of distinct integers, return all the possible 
 * permutations. You can return the answer in any order.
 * 
 * Example 1:
 *   Input: nums = [1,2,3]
 *   Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * Example 2:
 *   Input: nums = [0,1]
 *   Output: [[0,1],[1,0]]
 * 
 * Example 3:
 *   Input: nums = [1]
 *   Output: [[1]]
 * 
 * Constraints:
 *   - 1 <= nums.length <= 6
 *   - -10 <= nums[i] <= 10
 *   - All the integers of nums are unique.
 * 
 * ============================================================================
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const result = permute([1, 2, 3]);
    assertEquals(result.length, 6);
});

test('example 2', () => {
    const result = permute([0, 1]);
    assertEquals(result.length, 2);
});

test('example 3', () => {
    assertEquals(permute([1]), [[1]]);
});

module.exports = { permute };
