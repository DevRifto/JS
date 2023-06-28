// math.pow (2di power) :  like x2(squre) :
let result = Math.pow(3, 8); // it means we r multiplying 3 8times (3*3*3*3*3*3*3*3) = 6561
// console.log(result);

// math.abs(absolute) : is u have 2 values x = 1 and y = 2 and you (-) them result : 1 - 2 = -1
// if you give ( 2 - 1) result = 1 if you don't want to have nagitive result use absolute (abs):

// let x = 10;
// let y = 20;
// let result2 = Math.abs(x-y);

// if (result2 > 5) {
//   console.log("Passed");
// } else {
//   console.log("Failed");
// }
//---------------------------------------------
// Math Round :
// if you want the closest number of any desimals it will round figer the number like 7.4 = 7 and 7.6 = 8.

// let x = 7.4;
// let z = 7.5;
// let y = 7.6;
// let result2 = Math.round(x);
// let result3 = Math.round(z);
// let result4 = Math.round(y);

// console.log(result2);
// console.log(result3);
// console.log(result4);

// There is also Math.cell() it show you the nearest upper number :
// There is also Math.floor() it show you the nearest lower number :

// Math.ranrom :
// if you want to see some random numbers use Math.random():
// for(let i = 0; i < 10; i++){
//     let random = Math.round(Math.random()*5);
//     console.log(random);
// }

// Math.max :
let max = Math.max(1,2,3,4,5,6,7,8,9,10,11,12);
let min = Math.min(1,2,3,4,5,6,7,8,9,10,11,12);
console.log('Maximul Number is ', max,'Lowest Number is ',min);