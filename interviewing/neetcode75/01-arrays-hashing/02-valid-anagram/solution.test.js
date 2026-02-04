const { test, assertEquals, assertTrue, assertFalse } = require('../../test-framework');
const { isAnagram, isAnagramSort } = require('./solution');

// ============================================================================
// TESTS FOR isAnagram
// ============================================================================

test('example 1 - valid anagram', () => {
    assertTrue(isAnagram('anagram', 'nagaram'));
});

test('example 2 - not an anagram', () => {
    assertFalse(isAnagram('rat', 'car'));
});

test('different lengths', () => {
    assertFalse(isAnagram('ab', 'abc'));
});

test('single character - same', () => {
    assertTrue(isAnagram('a', 'a'));
});

test('single character - different', () => {
    assertFalse(isAnagram('a', 'b'));
});

test('empty strings', () => {
    assertTrue(isAnagram('', ''));
});

test('repeated characters', () => {
    assertTrue(isAnagram('aabb', 'abab'));
});

test('same word', () => {
    assertTrue(isAnagram('hello', 'hello'));
});

// ============================================================================
// TESTS FOR isAnagramSort (alternative solution)
// ============================================================================

test('[sort] valid anagram', () => {
    assertTrue(isAnagramSort('anagram', 'nagaram'));
});

test('[sort] not an anagram', () => {
    assertFalse(isAnagramSort('rat', 'car'));
});
