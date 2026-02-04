const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Reverse Integer (Medium)
 * ============================================================================
 * 
 * Given a signed 32-bit integer x, return x with its digits reversed. If 
 * reversing x causes the value to go outside the signed 32-bit integer range 
 * [-2^31, 2^31 - 1], then return 0.
 * 
 * Assume the environment does not allow you to store 64-bit integers 
 * (signed or unsigned).
 * 
 * Example 1:
 *   Input: x = 123
 *   Output: 321
 * 
 * Example 2:
 *   Input: x = -123
 *   Output: -321
 * 
 * Example 3:
 *   Input: x = 120
 *   Output: 21
 * 
 * Constraints:
 *   - -2^31 <= x <= 2^31 - 1
 * 
 * ============================================================================
 */

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    assertEquals(reverse(123), 321);
});

test('example 2 - negative', () => {
    assertEquals(reverse(-123), -321);
});

test('example 3 - trailing zero', () => {
    assertEquals(reverse(120), 21);
});

test('overflow', () => {
    assertEquals(reverse(1534236469), 0);
});

module.exports = { reverse };
