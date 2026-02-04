const { test, assertTrue, assertFalse } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Word Search (Medium)
 * ============================================================================
 * 
 * Given an m x n grid of characters board and a string word, return true if 
 * word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cells, 
 * where adjacent cells are horizontally or vertically neighboring. The same 
 * letter cell may not be used more than once.
 * 
 * Example 1:
 *   Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
 *          word = "ABCCED"
 *   Output: true
 * 
 * Example 2:
 *   Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
 *          word = "SEE"
 *   Output: true
 * 
 * Example 3:
 *   Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
 *          word = "ABCB"
 *   Output: false
 * 
 * Constraints:
 *   - m == board.length
 *   - n = board[i].length
 *   - 1 <= m, n <= 6
 *   - 1 <= word.length <= 15
 *   - board and word consists of only lowercase and uppercase English letters.
 * 
 * Follow up: Could you use search pruning to make your solution faster with 
 * a larger board?
 * 
 * ============================================================================
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];

test('example 1', () => {
    assertTrue(exist(board, "ABCCED"));
});

test('example 2', () => {
    assertTrue(exist(board, "SEE"));
});

test('example 3', () => {
    assertFalse(exist(board, "ABCB"));
});

module.exports = { exist };
