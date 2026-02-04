/*
 * ============================================================================
 * PROBLEM: Valid Anagram (Easy)
 * ============================================================================
 * 
 * Given two strings s and t, return true if t is an anagram of s, 
 * and false otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a 
 * different word or phrase, typically using all the original letters 
 * exactly once.
 * 
 * Example 1:
 *   Input: s = "anagram", t = "nagaram"
 *   Output: true
 * 
 * Example 2:
 *   Input: s = "rat", t = "car"
 *   Output: false
 * 
 * Constraints:
 *   - 1 <= s.length, t.length <= 5 * 10^4
 *   - s and t consist of lowercase English letters
 * 
 * Follow up: What if the inputs contain Unicode characters?
 * 
 * ============================================================================
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    // Count character frequencies
    const count = {};
    
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    for (const char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    
    return true;
}

// Alternative: sort and compare (simpler but O(n log n))
function isAnagramSort(s, t) {
    if (s.length !== t.length) return false;
    return [...s].sort().join('') === [...t].sort().join('');
}

module.exports = { isAnagram, isAnagramSort };
