// If you want to find the sum of an array :

function getSumOfArray(numbers) {
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
    console.log(i, sum);
  }
}
let array = [2,2,2,2,2,2,2,2,2,2];
getSumOfArray(array);
