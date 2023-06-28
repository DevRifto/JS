// JSON stringify convert any object to string :
// JSON parse convert stringify to orginal object:
const user = {id: 1, Number : 12};
const string = JSON.stringify(user);
const parse = JSON.parse(string);
console.log(string);
console.log(parse);
