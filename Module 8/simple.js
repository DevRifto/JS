//You can function inside the function to make a loop:
function sum(i) {
    if(i === 1){
        return 1;
    }
    console.log(i);
  return i + sum(i - 1);
}
const result = sum(5);
console.log(result);
