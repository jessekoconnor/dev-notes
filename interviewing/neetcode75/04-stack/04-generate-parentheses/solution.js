const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Generate Parentheses (Medium)
 * ============================================================================
 * 
 * Given n pairs of parentheses, write a function to generate all combinations 
 * of well-formed parentheses.
 * 
 * Example 1:
 *   Input: n = 3
 *   Output: ["((()))","(()())","(())()","()(())","()()()"]
 * 
 * Example 2:
 *   Input: n = 1
 *   Output: ["()"]
 * 
 * Constraints:
 *   - 1 <= n <= 8
 * 
 * ============================================================================
 */

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1 - n=3', () => {
    const result = generateParenthesis(3);
    assertEquals(result.length, 5);
});

test('example 2 - n=1', () => {
    assertEquals(generateParenthesis(1), ["()"]);
});

test('n=2', () => {
    const result = generateParenthesis(2);
    assertEquals(result.length, 2);
});

module.exports = { generateParenthesis };
