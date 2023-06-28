// problem 1 :
const oddNumbers = [1, 3, 5, 7, 9];
const evenNumbers = oddNumbers.map((x) => x + 1);
console.log(evenNumbers);

// problem 2 :

const array = [33, 50, 79, 78, 90, 101, 30];
const dividedby10 = array.filter((x) => x % 10 === 0);
console.log(dividedby10);

// problem 3 :

const evenNumbersFind = oddNumbers.find((x) => x + 1);
console.log(evenNumbersFind);

// problem 4 :
const dividedby10Find = array.find((x) => x % 10 === 0);
console.log(dividedby10Find);