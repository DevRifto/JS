// (+) / (-) Funtion :----------------------------------
function updateInput(isIncrise, inputId) {
  const input = document.getElementById(inputId);
  const inputValue = parseInt(input.value);
  let total;
  if (isIncrise === true) {
    total = inputValue + 1;
  } else {
    total = inputValue - 1;
  }
  input.value = total;
  return total;
}
// price Funtion :-----------------------------------------
function updatePrice(inputData, priceId, price) {
  const totalPrice = inputData * price;
  const priceElement = document.getElementById(priceId);
  priceElement.innerText = totalPrice;
  return totalPrice;
}

// subTotal : ---------------------------------------------
function setEelementValu(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

function calculateSubTotal() {
  const iPhonePrice = document.getElementById("firstPrice");
  const iPhonePricevalue = parseInt(iPhonePrice.innerText);

  const casePrice = document.getElementById("secPrice");
  const casePriceValue = parseInt(casePrice.innerText);

  const subTotal = document.getElementById("subTotal");
  const subTotalValue = parseInt(subTotal.innerText);

  const sum = iPhonePricevalue + casePriceValue;
  setEelementValu("subTotal", sum);

  // tax :
  const tax = (sum * 0.1).toFixed(2);
  const taxValue = parseInt(tax);
  setEelementValu("tax", taxValue);

  // total :
  const fullTotal = sum + taxValue;
  setEelementValu("fullTotal", fullTotal);
}

// First (Pluse) Btn : ---------------------------------------
document.getElementById("firstPluseBtn").addEventListener("click", function () {
  const inputData = updateInput(true, "firstInput");
  const phonePrice = 1219;
  updatePrice(inputData, "firstPrice", phonePrice);
  calculateSubTotal();
});
// First (Minus) Btn : ---------------------------------------
document.getElementById("firstMinusBtn").addEventListener("click", function () {
  const inputData = updateInput(false, "firstInput");
  const phonePrice = 1219;
  updatePrice(inputData, "firstPrice", phonePrice);
  calculateSubTotal();
});
// Secound (Pluse) Btn : -------------------------------------
document.getElementById("secPluseBtn").addEventListener("click", function () {
  const inputData = updateInput(true, "secInput");
  const casePrice = 59;
  updatePrice(inputData, "secPrice", casePrice);
  calculateSubTotal();
});
// Secound (Minus) Btn : -------------------------------------
document.getElementById("secMinusBtn").addEventListener("click", function () {
  const inputData = updateInput(false, "secInput");
  const casePrice = 59;
  updatePrice(inputData, "secPrice", casePrice);
  calculateSubTotal();
});
