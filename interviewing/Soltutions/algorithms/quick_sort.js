function quickSort(array) {
    if (array.length < 2) return array;
  
    // Setup pivot val and lessThan greaterThan arrays
    const pivotVal = array[0];
    const lessThan = [];
    const greaterThanEqual = [];
  
    // separate vals into two arrays
    for (let i = 1; i < array.length; i++) {
      const val = array[i];
      if (val < pivotVal) {
        lessThan.push(val);
      } else {
        greaterThanEqual.push(val);
      }
    }
  
    // recurse and combine results
    return [ ...quickSort(lessThan), pivotVal, ...quickSort(greaterThanEqual) ];
}