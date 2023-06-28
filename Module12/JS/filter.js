// Using Fileter :
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const bigNumbers = numbers.filter((num) => num > 5);
const tinyNumbers = numbers.filter((num) => num <= 5);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
const oddNumbers = numbers.filter((num) => num % 2 !== 0);

console.log(`Tiny Numbers  = ${tinyNumbers}`);
console.log(`Big Numbers   = ${bigNumbers}`);
console.log(`Even Numbers  = ${evenNumbers}`);
console.log(`Odd Numbers   = ${oddNumbers}`);
