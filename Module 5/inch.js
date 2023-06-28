// 12 inch = 1 fet.

// -----------------------using variables :
// const myInch = 84;
// const myFoot = myInch / 12;
// console.log(myFoot);

// -----------------------using functions :
function fet(inch){
    const myFet = inch / 12;
    return myFet;
}
var total = fet(82);
total = total.toFixed();
console.log('You are', total , 'fet');