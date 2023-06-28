// changing text by nomal way ----------------------------------------------
function cheakBalance() {
  const inbox = document.getElementById("balance");
  inbox.innerText = "$0";
}

// changing by event Listner -----------------------------------------------
// document.getElementById("cheakByEvent").addEventListener("click", function () {
//   document.getElementById("balance").innerText = "OK I will earn money";
// });

// changing by input using event ------------------------------------
document.getElementById('inputBtn').addEventListener('click', function(){
    const input = document.getElementById('input');
    const balance = document.getElementById('balance');
    balance.innerText = input.value;
    input.value = '';
})