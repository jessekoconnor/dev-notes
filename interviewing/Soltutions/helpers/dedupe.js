// function which dedupes an array of strings

module.exports = function dedupe(arr) {
    return Array.from(new Set(arr));
}