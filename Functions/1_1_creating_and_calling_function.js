/*

Functions are Code Blocks
Functions are reusable code blocks designed to perform a particular task.
Functions are executed when they are called or invoked.
Functions are fundamental in all programming languages.
*/

function sayMyName() {
  return 'Goodnews Ikechukwu Nwankpa';
}
//The function above does nothing yet.. we have to call the function or invoke it.

let myName = sayMyName();
console.log(myName);

function orderRate(order, rate) {
  return order * rate;
}
// Calling the function
let Order = orderRate(40000, 0.1);

console.log(Order);

/*
Exercise 1 — Customer Greeting

Create a function called: greetCustomer()
It should receive a customer's name as a parameter and display: Welcome Goodnews!
Test it with at least 3 different names.

*/

function greetCustomer(name) {
  console.log(`Welcome ${name}!`);
}

//Testing with 3 Different Names
greetCustomer('Ikechukwu');
greetCustomer('John');
greetCustomer('Mathew');
console.log();
function welcomeBuziness(name, companyName) {
  console.log(`Welcome, ${name} to ${companyName}.`);
}

welcomeBuziness('Goodnews', "G'news Technologies");
welcomeBuziness('Kayode', 'Taverna Hotel');
welcomeBuziness('Naomi', 'Mikky Salon');

/*
Create a function:showProduct()
It should receive:
product name
price
*/
console.log();
function showProduct(productname, productprice) {
  console.log(`${productname}: ₦${productprice}`);
}

showProduct('Laptop', 180000);
showProduct('Headset', 16000);
showProduct('SamSung Tv', 1600000);
console.log();

function calculateSubtotal(item, price, qty, discount,subtotal) {
  subtotal = price * qty;
  console.log(`The name of item is: ${item}`);
  console.log(`The price for the item is: ₦${price}`);
  console.log(`The quantity  for the item is: ${qty}`);
  console.log(`The Total is: ₦${subtotal}`);
}
calculateSubtotal('Laptop', 250000, 3);
console.log();
calculateSubtotal('Mouse', 7000, 32);
