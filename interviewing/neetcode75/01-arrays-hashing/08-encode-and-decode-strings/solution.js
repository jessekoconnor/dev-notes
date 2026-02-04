const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Encode and Decode Strings (Medium)
 * ============================================================================
 * 
 * Design an algorithm to encode a list of strings to a string. The encoded 
 * string is then sent over the network and is decoded back to the original 
 * list of strings.
 * 
 * Please implement encode and decode.
 * 
 * Example 1:
 *   Input: ["lint","code","love","you"]
 *   Output: ["lint","code","love","you"]
 *   Explanation: One possible encode method is: "lint:;code:;love:;you"
 * 
 * Example 2:
 *   Input: ["we","say",":","yes"]
 *   Output: ["we","say",":","yes"]
 *   Explanation: One possible encode method is: "we:;say:;:::;yes"
 * 
 * Constraints:
 *   - 0 <= strs.length < 100
 *   - 0 <= strs[i].length < 200
 *   - strs[i] contains any possible characters out of 256 valid ASCII chars.
 * 
 * Note: Do not use class member/global/static variables to store states. 
 * Your encode and decode algorithms should be stateless.
 * 
 * ============================================================================
 */

/**
 * Encodes a list of strings to a single string.
 * @param {string[]} strs
 * @return {string}
 */
function encode(strs) {
    // TODO: Implement solution
}

/**
 * Decodes a single string to a list of strings.
 * @param {string} s
 * @return {string[]}
 */
function decode(s) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const input = ["lint", "code", "love", "you"];
    assertEquals(decode(encode(input)), input);
});

test('example 2 - with special chars', () => {
    const input = ["we", "say", ":", "yes"];
    assertEquals(decode(encode(input)), input);
});

test('empty array', () => {
    assertEquals(decode(encode([])), []);
});

test('array with empty strings', () => {
    const input = ["", "", ""];
    assertEquals(decode(encode(input)), input);
});

module.exports = { encode, decode };
