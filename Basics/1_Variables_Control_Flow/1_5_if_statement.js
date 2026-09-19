// if (condition) {
//   // code runs when condition is true
// }
const tempt = 180;
if (tempt <= 32) {
  console.log(`The temperature is ${tempt}: It's frezing outside`);
}

if (tempt >= 110) {
  console.log(`The temperature is ${tempt}: It's way too hot outside`);
}

// Code challenge

let age = 65;

if (age <= 7) {
  console.log(`You are ${age} years old. Sorry you are still a minor.`);
}

// if (age >= 8 && age <= 18) {
//   console.log(`You are ${age} years old. Sorry you are still a teenager.`);
// }

if (age >= 65) {
  console.log(`You are ${age} years old. Welcome senior citizen!!!`);
}
//A restaurant gives free delivery when an order reaches ₦50,000.
let order = 10000;
if (order >= 50000) {
  console.log(`Your order is ₦${order}.`);
  console.log('Congratulations! You qualify for free delivery.');
}

if (order <= 40000) {
  console.log(`Your order is ₦${order}.`);
  console.log('Sorry! You do not qualify for free delivery.');
}

// A customer receives a 15% discount when they buy at least 5 items.

let quantity =7;
let price = 30000;
let discount = '';
let finalPrice = '';
if (quantity >= 6) {
  discount = price * (15 / 100);
  finalPrice = price - discount;
  console.log(`Congratulation ! You are entitled to a 15% discount.`);
  console.log(`Discount: (15%): ₦${discount}`);
  console.log(`SubTotal: ₦${finalPrice}`);
}
if (quantity < 5) {
  console.log(`Sorry ! You not are entitled to a 15% discount.`);
}
