// There r 3 typeof alert :
/*
1. alert.
2. promt.
3.confirm.
*/
const bkash = () => {
  alert("Welcome to Bkash!");
  const yes = confirm("Do you want to See Your Balance ?");
  if (yes === true) {
    alert("Your Balance is : 00.00 Taka");
  } else {
    alert("Thanks For Using Bkash!");
  }
};
const pros = () => {
  let pro = prompt("Type your name");
  console.log(pro);
};

const ale = () => {
    alert("I am an Alert");
}
