// Given two arrays, craft the result w/ two iterators
function merge(_a, _b) {
    let res = [];
    
    let a = _a;
    let b = _b;
    let [a1, ...aRemaining] = a;
    let [b1, ...bRemaining] = b;
  
    // while both arrays have elements
    while(a1 !== undefined && b1 !== undefined) {
      // console.log('merge1', { a, b, a1, b1 })
      if (a1 < b1) {
        res.push(a1);
        a = aRemaining;
      } else {
        res.push(b1);
        b = bRemaining;
      }
  
      [a1, ...aRemaining] = a;
      [b1, ...bRemaining] = b;
    };
  
    // when one array is empty
    if (a1 === undefined) {
       res = res.concat(b1, ...bRemaining);
    } else {
      res = res.concat(a1, ...aRemaining);
    }
  
    // console.log('merge', { _a, _b, res })
    
    return res;
  }
  
  // Split array into two each time
  function mergeSort(array, depth = 0) {
    // Write your code here.
  
    if (array.length < 2) return array;
    
    const [left, ...right] = array;
  
    // console.log('entering recursion', { left, right, depth })
  
    let leftMergeSort = mergeSort([left], depth + 1);
    const rightMergeSort = mergeSort(right, depth + 1);
  
    console.log('exiting recursion', { leftMergeSort, rightMergeSort })
  
    return merge(leftMergeSort, rightMergeSort);
  }