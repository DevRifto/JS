// if you want to split between sentences, you can use the split :
// And Make a string into a array of sentences :
const userName = 'Abdullah Al Miraz . Rifato';
let split = userName.split(' '); // here i am saying to cut the spaces between the words and make single word.
console.log(split);
let splitDot = userName.split('.'); // here i am saying to cut the . between the words and make single word.
console.log(splitDot);
let splitAbc = userName.split(''); // here i am saying to cut the '' (its empty so it will split all charechter).
console.log(splitAbc);