const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Largest Rectangle in Histogram (Hard)
 * ============================================================================
 * 
 * Given an array of integers heights representing the histogram's bar height 
 * where the width of each bar is 1, return the area of the largest rectangle 
 * in the histogram.
 * 
 * Example 1:
 *   Input: heights = [2,1,5,6,2,3]
 *   Output: 10
 *   Explanation: The largest rectangle is shown in the red area, which has 
 *   an area = 10 units (width 2 x height 5, spanning indices 2-3).
 * 
 * Example 2:
 *   Input: heights = [2,4]
 *   Output: 4
 * 
 * Constraints:
 *   - 1 <= heights.length <= 10^5
 *   - 0 <= heights[i] <= 10^4
 * 
 * ============================================================================
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    assertEquals(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
});

test('example 2', () => {
    assertEquals(largestRectangleArea([2, 4]), 4);
});

test('single bar', () => {
    assertEquals(largestRectangleArea([5]), 5);
});

module.exports = { largestRectangleArea };
