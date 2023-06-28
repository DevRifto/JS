// if you want to remove duplicate values :
const names = [
  "Rifat",
  "Rifat",
  "Rifto",
  "Abdullah",
  "Miraz",
  "Miraz",
  "David",
  "Boos",
];

function removeDuplicate(names) {
  const uniqNames = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (uniqNames.includes(name) === false) {
      uniqNames.push(name);
    }
  }
  return uniqNames;
}
let uniqNames = removeDuplicate(names);
console.log(uniqNames);
