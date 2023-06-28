function maxHeight(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];

    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const height = [11, 12, 13, 14, 15, 16];
const tallest = maxHeight(height);

console.log("Tallest person is ", tallest);
