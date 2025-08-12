// 5! = 5 * 4 * 3 * 2 * 1

// function factorial(n) {
//     let result = 1;
//     while (n > 1) {
//         result = result * n; // result = result * n;
//         n--;
//     }
//     return result;
// }

// Input: 5
// result: 5, n: 5
// result: 20, n: 4
// result: 60, n: 3
// result: 120, n: 2

// Recursive version of factorial function
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 5!
// 5 * 4!
// 5 * 4 * 3!
// 5 * 4 * 3 * 2!
// 5 * 4 * 3 * 2 * 1!

console.log(factorial(5)); // Output: 120


