const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Climbing Stairs (Easy)
 * ============================================================================
 * 
 * You are climbing a staircase. It takes n steps to reach the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways 
 * can you climb to the top?
 * 
 * Example 1:
 *   Input: n = 2
 *   Output: 2
 *   Explanation: There are two ways to climb to the top.
 *     1. 1 step + 1 step
 *     2. 2 steps
 * 
 * Example 2:
 *   Input: n = 3
 *   Output: 3
 *   Explanation: There are three ways to climb to the top.
 *     1. 1 step + 1 step + 1 step
 *     2. 1 step + 2 steps
 *     3. 2 steps + 1 step
 * 
 * Constraints:
 *   - 1 <= n <= 45
 * 
 * ============================================================================
 */

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    assertEquals(climbStairs(2), 2);
});

test('example 2', () => {
    assertEquals(climbStairs(3), 3);
});

test('n=1', () => {
    assertEquals(climbStairs(1), 1);
});

module.exports = { climbStairs };
