function numberOfWaysToMakeChange(n, denoms) {
    // Write your code here.
  
    // Edge Case
    if (n === 0) return 1;
  
    // init dp arr
    const dp = [];
    for(let i = 0; i <= n; i++) {
      dp.push(0);
    }
  
    // iterate through each denom
    denoms.forEach(denom => {
      // cycle through each num 1 to 6 (inc)
      for(let i = 1; i <= n; i++) {      
        const remainder = i % denom;
        const curDP = dp[i];
  
        // Use prev solutions if i > curDenom
        // bc it means we found a prev solution that will work
        // so sum cur + a prev sol together
        let prevFoundSolutions = 0
        if(i >= denom) {
          prevFoundSolutions = dp[i - denom];
          console.log('suing prev sol', { prevFoundSolutions, i, denom })
        }
  
        // Set sum to this solution
        if (remainder === 0 || prevFoundSolutions > 0) {
          dp[i] = dp[i] + Math.max(1, prevFoundSolutions);
        }
  
        console.log({ n, denoms, denom, remainder, prevFoundSolutions, dp, i, curDP })
      }
  
    });
    return dp[n]
  }