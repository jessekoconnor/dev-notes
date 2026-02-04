const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: N-Queens (Hard)
 * ============================================================================
 * 
 * The n-queens puzzle is the problem of placing n queens on an n x n 
 * chessboard such that no two queens attack each other.
 * 
 * Given an integer n, return all distinct solutions to the n-queens puzzle. 
 * You may return the answer in any order.
 * 
 * Each solution contains a distinct board configuration of the n-queens' 
 * placement, where 'Q' and '.' both indicate a queen and an empty space, 
 * respectively.
 * 
 * Example 1:
 *   Input: n = 4
 *   Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 *   Explanation: There exist two distinct solutions to the 4-queens puzzle.
 * 
 * Example 2:
 *   Input: n = 1
 *   Output: [["Q"]]
 * 
 * Constraints:
 *   - 1 <= n <= 9
 * 
 * ============================================================================
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
    // TODO: Implement solution
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1 - n=4', () => {
    const result = solveNQueens(4);
    assertEquals(result.length, 2);
});

test('example 2 - n=1', () => {
    assertEquals(solveNQueens(1), [["Q"]]);
});

test('n=8', () => {
    const result = solveNQueens(8);
    assertEquals(result.length, 92);
});

module.exports = { solveNQueens };
