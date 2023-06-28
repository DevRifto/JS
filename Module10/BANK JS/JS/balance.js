// Deposit :
document.getElementById("depositBtn").addEventListener("click", function () {
  const deposit = document.getElementById("deposit");
  const depositValue = parseFloat(deposit.innerText);

  const addingDeposit = document.getElementById("depositInput");
  const addingDepositValue = parseFloat(addingDeposit.value);

  if (isNaN(addingDepositValue)) {
    alert("Please Probide Valid Number");
    return;
  }

  const totalDeposit = depositValue + addingDepositValue;
  deposit.innerText = totalDeposit;
  addingDeposit.value = "";

  const balance = document.getElementById("balance");
  const balanceValue = parseFloat(balance.innerText);

  const totalBalance = balanceValue + addingDepositValue;
  balance.innerText = totalBalance;
});

// widraw :----------------------------------------------------------------------
document.getElementById("widrawBtn").addEventListener("click", function () {
  const widraw = document.getElementById("widraw");
  const widrawValue = parseFloat(widraw.innerText);

  const addingWidraw = document.getElementById("widrawInput");
  const addingWidrawValue = parseFloat(addingWidraw.value);
  console.log(addingWidrawValue);
  if (isNaN(addingWidrawValue)) {
    alert("Please Probide Valid Number");
    return;
  }

  const totalWidraw = widrawValue + addingWidrawValue;
  widraw.innerText = totalWidraw;
  addingWidraw.value = "";

  const balance = document.getElementById("balance");
  const balanceValue = parseFloat(balance.innerText);

  const totalBalance = balanceValue - addingWidrawValue;
  balance.innerText = totalBalance;
});
