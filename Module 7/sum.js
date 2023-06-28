// if you want to sum :

// const shopingCart = [
//   { name: "shirt", price: 10 },
//   { name: "pant", price: 20 },
//   { name: "towser", price: 15 },
//   { name: "joggers", price: 18 },
// ];

// function priceCal(product) {
//   let sum = 0;
//   for (let i = 0; i < shopingCart.length; i++) {
//     let element = shopingCart[i];
//     sum = sum + element.price;
//   }
//   return sum;
// }
// let sum = priceCal(shopingCart);
// console.log("Your Total Bill is", sum, "Taka Sir");

// ---------------------------------------------------------------------------

// if you want to calculate the quantity sum not single shirt :
const shopingCart = [
  { name: "shirt", price: 10, quantity: 2 },
  { name: "pant", price: 20, quantity: 2 },
  { name: "towser", price: 15, quantity: 3 },
  { name: "joggers", price: 18, quantity: 4 },
];

function priceCal(product) {
  let sum = 0;
  for (let i = 0; i < shopingCart.length; i++) {
    let product = shopingCart[i];
    sum = sum + product.price * product.quantity;
  }
  return sum;
}
let sum = priceCal(shopingCart);
console.log("Your Total Bill is", sum, "Taka Sir");
