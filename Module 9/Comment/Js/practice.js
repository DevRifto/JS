// find the button :
document.getElementById("btn").addEventListener("click", function () {
  const input = document.getElementById("input"); // get the input element
  const inputValue = input.value; // get the value of the input

  const blankBox = document.getElementById("blank-box"); //finding the blank box
  const p = document.createElement("p"); // creating the p element
  p.innerText = inputValue; // switching the value of the input to p
  blankBox.appendChild(p); // pushing 'p' in the blank box
  input.value = ""; // setting the value of the input blank
});
