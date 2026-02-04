const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Contains Duplicate (Easy)
 * ============================================================================
 * 
 * Given an integer array nums, return true if any value appears at least 
 * twice in the array, and return false if every element is distinct.
 * 
 * Example 1:
 *   Input: nums = [1,2,3,1]
 *   Output: true
 * 
 * Example 2:
 *   Input: nums = [1,2,3,4]
 *   Output: false
 * 
 * Example 3:
 *   Input: nums = [1,1,1,3,3,4,3,2,4,2]
 *   Output: true
 * 
 * Constraints:
 *   - 1 <= nums.length <= 10^5
 *   - -10^9 <= nums[i] <= 10^9
 * 
 * ============================================================================
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    // Use a Set to track seen numbers - O(n) time, O(n) space
    return new Set(nums).size !== nums.length;
}

// Alternative solution using hash map (more explicit)
function containsDuplicateAlt(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1 - has duplicate', () => {
    assertEquals(containsDuplicate([1, 2, 3, 1]), true);
});

test('example 2 - no duplicate', () => {
    assertEquals(containsDuplicate([1, 2, 3, 4]), false);
});

test('example 3 - multiple duplicates', () => {
    assertEquals(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
});

test('single element', () => {
    assertEquals(containsDuplicate([1]), false);
});

test('two same elements', () => {
    assertEquals(containsDuplicate([1, 1]), true);
});

test('negative numbers', () => {
    assertEquals(containsDuplicate([-1, -2, -3, -1]), true);
});

module.exports = { containsDuplicate, containsDuplicateAlt };
