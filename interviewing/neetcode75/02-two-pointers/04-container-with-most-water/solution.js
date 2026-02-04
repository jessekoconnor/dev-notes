const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Container With Most Water (Medium)
 * ============================================================================
 * 
 * You are given an integer array height of length n. There are n vertical 
 * lines drawn such that the two endpoints of the ith line are (i, 0) and 
 * (i, height[i]).
 * 
 * Find two lines that together with the x-axis form a container, such that 
 * the container contains the most water.
 * 
 * Return the maximum amount of water a container can store.
 * 
 * Notice that you may not slant the container.
 * 
 * Example 1:
 *   Input: height = [1,8,6,2,5,4,8,3,7]
 *   Output: 49
 *   Explanation: The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
 *   In this case, the max area of water the container can contain is 49 
 *   (between index 1 and index 8, width = 7, height = min(8,7) = 7).
 * 
 * Example 2:
 *   Input: height = [1,1]
 *   Output: 1
 * 
 * Constraints:
 *   - n == height.length
 *   - 2 <= n <= 10^5
 *   - 0 <= height[i] <= 10^4
 * 
 * ============================================================================
 */

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    assertEquals(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
});

test('example 2', () => {
    assertEquals(maxArea([1, 1]), 1);
});

module.exports = { maxArea };
