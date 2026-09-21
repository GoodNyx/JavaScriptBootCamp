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

function calculateSubtotal(customername, item, price, qty) {
  let discountRate = 0.1;
  let vatRate = 0.075;
  let delivery = 5000;
  let customerOrder = price * qty;
  let DiscountAmount = customerOrder * discountRate;

  //Amount After Discount
  let amountAfterDiscount = customerOrder - DiscountAmount;

  //Vat Calculation

  let vatAmount = amountAfterDiscount * vatRate;
  // Final amount for payment
  let finalAmount = amountAfterDiscount + vatAmount + delivery;

  console.log('========== Customer Order ==========');
  console.log(`Customer Name: ${customername}`);
  console.log(`Item Order: ${item}`);
  console.log(`Item Price (₦): ₦${price}`);
  console.log(`Quantity Order: ${qty}`);
  console.log(`Total Amount(₦): ₦${customerOrder}`);
  console.log(`Discount Rate (%): ${discountRate * 100}%`);
  console.log(`Discount Amount (₦): ₦${DiscountAmount}`);
  console.log(`Total Amount (₦): ₦${amountAfterDiscount}`);
  console.log(`VAT Rate (%): ${vatRate * 100}%`);
  console.log(`VAT Amount (₦): ₦${vatAmount}`);
  console.log(`Delivery Amount (₦): ₦${delivery}`);
  console.log(`Final Amount (₦) : ₦${finalAmount}`);
}

calculateSubtotal('Goodnews', 'Laptop', 250000, 3);
console.log();
calculateSubtotal('Malik', 'Mouse', 5000, 20);
console.log();
calculateSubtotal('Naomi', 'Human Hair', 250000, 5);
