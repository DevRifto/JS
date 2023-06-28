// if you want the cheapest price phone :
const phones = [
  { name: "samsung", price: 20000 },
  { name: "Oppo", price: 15000 },
  { name: "iPhone", price: 80000 },
  { name: "Nokia", price: 80},
  { name: "Xiaomi", price: 50000 },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    let phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  } return cheapest;
}

let bugetPhone = cheapestPhone(phones);
console.log(bugetPhone);
