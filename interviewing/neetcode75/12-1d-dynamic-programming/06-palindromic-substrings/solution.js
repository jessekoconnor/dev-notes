const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Palindromic Substrings (Medium)
 * ============================================================================
 * 
 * Given a string s, return the number of palindromic substrings in it.
 * 
 * A string is a palindrome when it reads the same backward as forward.
 * 
 * A substring is a contiguous sequence of characters within the string.
 * 
 * Example 1:
 *   Input: s = "abc"
 *   Output: 3
 *   Explanation: Three palindromic strings: "a", "b", "c".
 * 
 * Example 2:
 *   Input: s = "aaa"
 *   Output: 6
 *   Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 * 
 * Constraints:
 *   - 1 <= s.length <= 1000
 *   - s consists of lowercase English letters.
 * 
 * ============================================================================
 */

/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    assertEquals(countSubstrings("abc"), 3);
});

test('example 2', () => {
    assertEquals(countSubstrings("aaa"), 6);
});

module.exports = { countSubstrings };
