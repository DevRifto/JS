// New Input : -----------------------------
function inputFun(inputId) {
  const input = document.getElementById(inputId);
  const inputValue = parseFloat(input.value);
  if (isNaN(inputValue)) {
    alert("Please Provide valid Number");
    return;
  }
  input.value = "";
  return inputValue;
}

//Old Element :------------------------------
function oldValueFun(innerTextId) {
  const oldElement = document.getElementById(innerTextId);
  const oldElementValue = parseFloat(oldElement.innerText);
  return oldElementValue;
}

//switch total :--------------------------------
function switchPlace(elementId, totalValue) {
  const oldElement = document.getElementById(elementId);
  oldElement.innerText = totalValue;
}
// Deposit : ---------------------------------------------------------------------
document.getElementById("depositBtn").addEventListener("click", function () {
  const depositInput = inputFun("depositInput");
  const deposit = oldValueFun("deposit");
  const totalValue = depositInput + deposit;
  switchPlace("deposit", totalValue);
  const balance = oldValueFun("balance");
  const totalBalance = depositInput + balance;
  switchPlace("balance", totalBalance);
});
// Widraw : ---------------------------------------------------------------------
document.getElementById("widrawBtn").addEventListener("click", function () {
  const widrawInput = inputFun("widrawInput");
  const widraw = oldValueFun("widraw");
  const totalValue = widraw + widrawInput;
  switchPlace("widraw", totalValue);
  const balance = oldValueFun("balance");
  const totalBalance = balance - widrawInput;
  switchPlace("balance", totalBalance);
});
