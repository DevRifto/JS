// if you want to find or serch somthing is that is available in the setring : includes(serch...)
const userName = "Abdullah Al Miraz"; // value
let search = "abDulLah"; // what im searching
let userNameLower = userName.toLowerCase(); // Making userName lower case
let searchLower = search.toLowerCase(); // Making Search   lower case
let doseExist = userNameLower.includes(searchLower); // searching
console.log(doseExist);

// if you want to search in one line :

const doseExistInOneLine = userName
  .toLocaleLowerCase()
  .includes(search.toLocaleLowerCase());
console.log(doseExistInOneLine);

// how to search by indexOf():
// if your index is -1 it means there are no matches of the search.

if (userName.indexOf("Abdullah") !== -1) {
  console.log("it is available");
} else {
  console.log("Sorry it is not available");
}

// There is one more 'stratswith' :

console.log(userName.startsWith('Abdullah'));

// There is oppojit  'endswith' : (it is helpful for serching last like .png . pdf)
console.log(userName.endsWith('Miraz'));
