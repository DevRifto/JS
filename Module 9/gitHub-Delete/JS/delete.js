// find The Input :
document.getElementById("input").addEventListener("keyup", function (event) {
  const inputValue = event.target.value; // get the value
  const btn = document.getElementById("btn"); // fin the button
  if (inputValue === "remove") { // set a rule to remove the input
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", true);
  }
});
// find the button :
document.getElementById("btn").addEventListener("click", function () {
  const text = document.getElementById("text"); // find what you want to remove
  text.style.display = "none"; // set display to none
});
