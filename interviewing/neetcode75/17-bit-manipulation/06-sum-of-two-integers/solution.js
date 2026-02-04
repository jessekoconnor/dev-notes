const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Sum of Two Integers (Medium)
 * ============================================================================
 * 
 * Given two integers a and b, return the sum of the two integers without 
 * using the operators + and -.
 * 
 * Example 1:
 *   Input: a = 1, b = 2
 *   Output: 3
 * 
 * Example 2:
 *   Input: a = 2, b = 3
 *   Output: 5
 * 
 * Constraints:
 *   - -1000 <= a, b <= 1000
 * 
 * ============================================================================
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a, b) {
    // TODO: Implement solution (bit manipulation)
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    assertEquals(getSum(1, 2), 3);
});

test('example 2', () => {
    assertEquals(getSum(2, 3), 5);
});

test('negative numbers', () => {
    assertEquals(getSum(-1, 1), 0);
});

module.exports = { getSum };
