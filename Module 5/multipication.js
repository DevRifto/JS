function sumOfMultipication(number) {
  let result = 1;
  for (var i = 1; i <= 7; i++) {
    result = result * i;

  }
  return result;
}

let result = sumOfMultipication();
console.log(result);
