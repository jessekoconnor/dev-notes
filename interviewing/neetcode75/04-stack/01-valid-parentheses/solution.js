const { test, assertTrue, assertFalse } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Valid Parentheses (Easy)
 * ============================================================================
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' 
 * and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 *   1. Open brackets must be closed by the same type of brackets.
 *   2. Open brackets must be closed in the correct order.
 *   3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Example 1:
 *   Input: s = "()"
 *   Output: true
 * 
 * Example 2:
 *   Input: s = "()[]{}"
 *   Output: true
 * 
 * Example 3:
 *   Input: s = "(]"
 *   Output: false
 * 
 * Constraints:
 *   - 1 <= s.length <= 10^4
 *   - s consists of parentheses only '()[]{}'.
 * 
 * ============================================================================
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    assertTrue(isValid("()"));
});

test('example 2', () => {
    assertTrue(isValid("()[]{}"));
});

test('example 3', () => {
    assertFalse(isValid("(]"));
});

test('nested valid', () => {
    assertTrue(isValid("{[]}"));
});

test('nested invalid', () => {
    assertFalse(isValid("([)]"));
});

module.exports = { isValid };
