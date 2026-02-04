const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Number of 1 Bits (Easy)
 * ============================================================================
 * 
 * Write a function that takes the binary representation of an unsigned 
 * integer and returns the number of '1' bits it has (also known as the 
 * Hamming weight).
 * 
 * Example 1:
 *   Input: n = 00000000000000000000000000001011
 *   Output: 3
 *   Explanation: The input binary string has a total of three '1' bits.
 * 
 * Example 2:
 *   Input: n = 00000000000000000000000010000000
 *   Output: 1
 *   Explanation: The input binary string has a total of one '1' bit.
 * 
 * Example 3:
 *   Input: n = 11111111111111111111111111111101
 *   Output: 31
 *   Explanation: The input binary string has a total of thirty one '1' bits.
 * 
 * Constraints:
 *   - The input must be a binary string of length 32.
 * 
 * Follow up: If this function is called many times, how would you optimize it?
 * 
 * ============================================================================
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    assertEquals(hammingWeight(0b00000000000000000000000000001011), 3);
});

test('example 2', () => {
    assertEquals(hammingWeight(0b00000000000000000000000010000000), 1);
});

test('example 3', () => {
    assertEquals(hammingWeight(0b11111111111111111111111111111101), 31);
});

module.exports = { hammingWeight };
