function isPalindrome(string) {

    // remember mid
    let mid = Math.floor(string.length / 2);

    console.log({ mid, string });

    let right = string.length - 1;

    // compare left and right, move inwards if they match
    for(let left = 0; left < mid; left++) {
      const l = string[left];
      const r = string[right];
  
      console.log({ l, r });
  
      if (l !== r) return false;
      right--;
    }
    return true;
}