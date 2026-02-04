const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Group Anagrams (Medium)
 * ============================================================================
 * 
 * Given an array of strings strs, group the anagrams together. You can return 
 * the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a 
 * different word or phrase, typically using all the original letters exactly 
 * once.
 * 
 * Example 1:
 *   Input: strs = ["eat","tea","tan","ate","nat","bat"]
 *   Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Example 2:
 *   Input: strs = [""]
 *   Output: [[""]]
 * 
 * Example 3:
 *   Input: strs = ["a"]
 *   Output: [["a"]]
 * 
 * Constraints:
 *   - 1 <= strs.length <= 10^4
 *   - 0 <= strs[i].length <= 100
 *   - strs[i] consists of lowercase English letters.
 * 
 * ============================================================================
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    // Note: Order of groups and within groups may vary
    assertEquals(result.length, 3);
});

test('example 2 - empty string', () => {
    assertEquals(groupAnagrams([""]), [[""]]);
});

test('example 3 - single char', () => {
    assertEquals(groupAnagrams(["a"]), [["a"]]);
});

module.exports = { groupAnagrams };
