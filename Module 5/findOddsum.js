function sumOfArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    sum = sum + element;
    // console.log(sum);
  }
  return sum;
}

function sumOfOddNumbers(numbers) {
  let oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    if (element % 2 !== 0) {
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

let array = [11, 12, 13, 14, 15];
let oddNumbers = sumOfOddNumbers(array);
let oddNumberSum = sumOfArray(oddNumbers);
console.log('Here is your odd numbers sum sir',oddNumberSum);
