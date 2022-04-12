

export const binets_fib = function(n) {
    // pi^n - (1-pi)^n / Math.sqrt(5)
    const fi = 1.618034;
    const one_minus_fi = 1 - fi;
    const pow_fi = Math.pow(fi,n);
    const pow_one_minus_fi =  Math.pow(one_minus_fi,n);
    return Math.round((pow_fi - pow_one_minus_fi) / Math.sqrt(5));
  };

  var fib = function(n) { 
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(goldenRatio, n) / Math.sqrt(5));
};

var fib_one = function(n) {
    return Math.round((Math.pow(1.618034,n) - Math.pow((1 - 1.618034),n) )/ Math.sqrt(5));
};

//Recursion + Memoization
const fib_recursion = (n, memo = []) => {
    if (n == 1 || n == 2 ) return 1
    if (memo[n]) return memo[n]
    let result = fib(n-1, memo) + fib(n-2, memo)
    memo[n] = result
    return result
  }

  //Bottom-up approach
const fib_memo = (n) => {
    if (n == 1 || n == 2) return 1;
    let bottomUp = new Array(n + 1).fill(0);
    (bottomUp[1] = 1), (bottomUp[2] = 1);
    for (let i = 3; i <= n; i++) {
      bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
    }
    return bottomUp[n];
  };