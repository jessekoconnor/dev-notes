/**
 * Minimal Testing Framework for NeetCode 75 Practice
 * 
 * Usage:
 *   const { test, assertEquals, assertArrayEquals } = require('../../test-framework');
 *   
 *   test('my test', () => {
 *       assertEquals(myFunction(input), expected);
 *   });
 * 
 * Run: node solution.js
 */

const colors = {
    green: (s) => `\x1b[32m${s}\x1b[0m`,
    red: (s) => `\x1b[31m${s}\x1b[0m`,
    gray: (s) => `\x1b[90m${s}\x1b[0m`,
    bold: (s) => `\x1b[1m${s}\x1b[0m`,
};

let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        passed++;
        console.log(colors.green('✓'), name);
    } catch (err) {
        failed++;
        console.log(colors.red('✗'), name);
        console.log(colors.gray(`  ${err.message}`));
    }
}

function assertEquals(actual, expected, message = '') {
    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);
    
    if (actualStr !== expectedStr) {
        throw new Error(
            message || `Expected ${expectedStr}, got ${actualStr}`
        );
    }
}

function assertArrayEquals(actual, expected, orderMatters = true) {
    if (!orderMatters) {
        actual = [...actual].sort();
        expected = [...expected].sort();
    }
    assertEquals(actual, expected);
}

function assertTrue(value, message = '') {
    if (value !== true) {
        throw new Error(message || `Expected true, got ${value}`);
    }
}

function assertFalse(value, message = '') {
    if (value !== false) {
        throw new Error(message || `Expected false, got ${value}`);
    }
}

// Print summary on exit
process.on('exit', () => {
    if (passed + failed > 0) {
        console.log();
        console.log(colors.bold(`Results: ${passed} passed, ${failed} failed`));
    }
});

module.exports = {
    test,
    assertEquals,
    assertArrayEquals,
    assertTrue,
    assertFalse,
};
