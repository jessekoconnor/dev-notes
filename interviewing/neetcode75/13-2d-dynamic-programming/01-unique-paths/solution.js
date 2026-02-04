const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Unique Paths (Medium)
 * ============================================================================
 * 
 * There is a robot on an m x n grid. The robot is initially located at the 
 * top-left corner (i.e., grid[0][0]). The robot tries to move to the 
 * bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move 
 * either down or right at any point in time.
 * 
 * Given the two integers m and n, return the number of possible unique paths 
 * that the robot can take to reach the bottom-right corner.
 * 
 * Example 1:
 *   Input: m = 3, n = 7
 *   Output: 28
 * 
 * Example 2:
 *   Input: m = 3, n = 2
 *   Output: 3
 *   Explanation: From the top-left corner, there are a total of 3 ways to 
 *   reach the bottom-right corner:
 *     1. Right -> Down -> Down
 *     2. Down -> Down -> Right
 *     3. Down -> Right -> Down
 * 
 * Constraints:
 *   - 1 <= m, n <= 100
 * 
 * ============================================================================
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    assertEquals(uniquePaths(3, 7), 28);
});

test('example 2', () => {
    assertEquals(uniquePaths(3, 2), 3);
});

test('1x1 grid', () => {
    assertEquals(uniquePaths(1, 1), 1);
});

module.exports = { uniquePaths };
