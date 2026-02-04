const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Longest Palindromic Substring (Medium)
 * ============================================================================
 * 
 * Given a string s, return the longest palindromic substring in s.
 * 
 * Example 1:
 *   Input: s = "babad"
 *   Output: "bab"
 *   Explanation: "aba" is also a valid answer.
 * 
 * Example 2:
 *   Input: s = "cbbd"
 *   Output: "bb"
 * 
 * Constraints:
 *   - 1 <= s.length <= 1000
 *   - s consist of only digits and English letters.
 * 
 * ============================================================================
 */

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const result = longestPalindrome("babad");
    assertEquals(result === "bab" || result === "aba", true);
});

test('example 2', () => {
    assertEquals(longestPalindrome("cbbd"), "bb");
});

test('single char', () => {
    assertEquals(longestPalindrome("a"), "a");
});

module.exports = { longestPalindrome };
