const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Palindrome Partitioning (Medium)
 * ============================================================================
 * 
 * Given a string s, partition s such that every substring of the partition 
 * is a palindrome. Return all possible palindrome partitioning of s.
 * 
 * Example 1:
 *   Input: s = "aab"
 *   Output: [["a","a","b"],["aa","b"]]
 * 
 * Example 2:
 *   Input: s = "a"
 *   Output: [["a"]]
 * 
 * Constraints:
 *   - 1 <= s.length <= 16
 *   - s contains only lowercase English letters.
 * 
 * ============================================================================
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const result = partition("aab");
    assertEquals(result.length, 2);
});

test('example 2', () => {
    assertEquals(partition("a"), [["a"]]);
});

module.exports = { partition };
