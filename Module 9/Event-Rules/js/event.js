//option 1 :
// oneclick = console.log('Hellow'); // you can use changebel js here
//<button onclick="document.body.style.backgroundColor = 'blue'">blue</button> // using event in html

//option 2
const makeRedbtn = document.getElementById("makeRed");
makeRedbtn.onclick = function makeBgRed() {
  document.body.style.backgroundColor = "red";
};

// option 3
const makeGreenBtn = document.getElementById("makeGreen");
makeGreenBtn.onclick = makeBgGreen;
function makeBgGreen() {
  document.body.style.backgroundColor = "green";
}

// ----------------------------------------------------------------------------using Event Listener
// option 4:
const makeBlackBtn = document.getElementById("makeBlack");
makeBlackBtn.addEventListener("click", makeBgBlack);
function makeBgBlack() {
  document.body.style.backgroundColor = "black";
}

// option 5:
const colorWhite = document.getElementById("makeTextWhite");
colorWhite.addEventListener("click", function textColor() {
  const textWhite = document.getElementById("white");
  textWhite.style.color = "white";
});

// option 6 :
document.getElementById("makeYellow").addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});
