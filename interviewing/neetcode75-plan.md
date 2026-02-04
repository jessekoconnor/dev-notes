# NeetCode 75 Practice Setup Plan

## Goals
- Practice all 75 NeetCode problems
- JavaScript implementations (extensible to other languages later)
- Simple, shared testing framework
- Two file organization options

---

## Proposed Directory Structure

```
neetcode75/
├── test-framework.js          # Shared minimal testing utilities
├── README.md                   # Overview + problem checklist
│
├── arrays-hashing/
│   ├── 01-contains-duplicate/
│   │   ├── solution.js         # Question + solution + tests (all-in-one)
│   │   └── solution.test.js    # Alternative: separate test file
│   ├── 02-valid-anagram/
│   └── ...
│
├── two-pointers/
├── sliding-window/
├── stack/
├── binary-search/
├── linked-list/
├── trees/
├── tries/
├── heap-priority-queue/
├── backtracking/
├── graphs/
├── advanced-graphs/
├── 1d-dynamic-programming/
├── 2d-dynamic-programming/
├── greedy/
├── intervals/
├── math-geometry/
└── bit-manipulation/
```

---

## Testing Framework Design

Super minimal - just a few helper functions in `test-framework.js`:

```javascript
// test-framework.js
function test(name, fn) { /* run test, catch errors, print pass/fail */ }
function assertEquals(actual, expected) { /* deep equality check */ }
function assertArrayEquals(actual, expected) { /* order-insensitive option */ }

// Usage: node solution.js  (runs inline tests)
// Usage: node solution.test.js (runs separate test file)
```

**Why this approach?**
- No npm dependencies needed
- Run with plain `node filename.js`
- Easy to copy/paste between problems
- Colored output for pass/fail

---

## Example 1: All-in-One File

`arrays-hashing/01-contains-duplicate/solution.js`

```javascript
const { test, assertEquals } = require('../../test-framework');

/*
 * PROBLEM: Contains Duplicate (Easy)
 * 
 * Given an integer array nums, return true if any value appears 
 * at least twice in the array, and return false if every element is distinct.
 * 
 * Example 1: nums = [1,2,3,1] → true
 * Example 2: nums = [1,2,3,4] → false
 */

function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}

// --- Tests ---
test('has duplicate', () => {
    assertEquals(containsDuplicate([1, 2, 3, 1]), true);
});

test('no duplicate', () => {
    assertEquals(containsDuplicate([1, 2, 3, 4]), false);
});

test('empty array', () => {
    assertEquals(containsDuplicate([]), false);
});

module.exports = { containsDuplicate };
```

**Run:** `node solution.js`

---

## Example 2: Split Files (Solution + Separate Tests)

`arrays-hashing/01-contains-duplicate/solution.js`

```javascript
/*
 * PROBLEM: Contains Duplicate (Easy)
 * 
 * Given an integer array nums, return true if any value appears 
 * at least twice in the array, and return false if every element is distinct.
 */

function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}

module.exports = { containsDuplicate };
```

`arrays-hashing/01-contains-duplicate/solution.test.js`

```javascript
const { test, assertEquals } = require('../../test-framework');
const { containsDuplicate } = require('./solution');

test('has duplicate', () => {
    assertEquals(containsDuplicate([1, 2, 3, 1]), true);
});

test('no duplicate', () => {
    assertEquals(containsDuplicate([1, 2, 3, 4]), false);
});

test('empty array', () => {
    assertEquals(containsDuplicate([]), false);
});
```

**Run:** `node solution.test.js`

---

## Questions for You

1. **File naming:** `solution.js` or use problem name like `contains-duplicate.js`?

2. **Problem numbering:** Include NeetCode numbers (01, 02...) or just names?

3. **All-in-one vs split:** Want both options available, or prefer one default?

4. **Future languages:** When adding Python/etc, same structure with `solution.py`?

5. **Anything else to include?** (e.g., time/space complexity template, hints section)

---

## Next Steps (once you approve)

1. Create `neetcode75/` directory
2. Create `test-framework.js` with utilities
3. Create one example problem both ways (all-in-one + split)
4. Create README with problem checklist

Let me know your thoughts! ✏️
