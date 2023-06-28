// factorial is a method its easy just multiply numbers :formula {n! = n * (n-1)}
// its multiplie by 1 to same number
function factorial(number) {
  let result = 1;
  for (let i = 1; i < number; i++) {
    result = result * number;
  }
  return result;
}
let result = factorial(5);
console.log("your total sum is", result);
