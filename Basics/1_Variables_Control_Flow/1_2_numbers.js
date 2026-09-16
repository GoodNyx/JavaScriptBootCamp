/*
JavaScript uses the number data type for both integers and decimal numbers.
const age = 25;
const price = 1500.50;
const temperature = -5;

Basic Arithmetic

const a = 20;
const b = 5;

console.log(a + b); // 25
console.log(a - b); // 15
console.log(a * b); // 100
console.log(a / b); // 4

Remainder %

The % operator gives you the remainder after division.
console.log(10 % 3); // 1
console.log(20 % 5); // 0

const number = 15;

console.log(number % 2);

const number = 15;

console.log(number % 2);
let score = 10;
score++;
console.log(score); // 11
score--;
console.log(score); // 10

Assignment Operators
let balance = 5000;
balance += 1000;

Converting Strings to Numbers
This is particularly important when working with user input.
const age = "25";
console.log(typeof age); // string
const ageNumber = Number(age);
console.log(typeof ageNumber); // number

NaN means Not a Number.
const result = Number("hello");
console.log(result); // NaN
console.log(Number.isNaN(result)); // true

Math Methods
JavaScript provides the Math object.
Math.round(4.6); // 5
Math.floor(4.9); // 4
Math.ceil(4.1);  // 5
Math.trunc(4.9); // 4
Math.abs(-20);       // 20
Math.max(10, 20, 5); // 20
Math.min(10, 20, 5); // 5


Random Numbers
Math.random();
To generate a random whole number from 1–10:
const number = Math.floor(Math.random() * 10) + 1;
console.log(number);

For a dice:
const dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
*/

/*
Beginner
Create two numbers and calculate their sum.
Calculate the difference between 100 and 35.
Calculate 25 × 8.
Calculate 100 / 4.
Find the remainder of 27 / 4.
Calculate 7² using **.
Create score = 50 and increase it by 20.
Create balance = 10000 and subtract 2500.
Calculate the average of five numbers.
Determine whether 47 is even or odd using %.

Intermediate
A phone costs ₦250,000. Calculate the price after a 10% discount.
A product costs ₦15,000. Add 7.5% tax.
Convert "25000" into a number and add 5000.
Find the largest of five numbers using Math.max().
Find the smallest of five numbers using Math.min().
Find the absolute difference between -20 and 15.
Round 45.678 to the nearest whole number.
Generate a random number from 1–100.
Calculate a student's percentage from total marks and marks obtained.
Calculate a business's profit and profit percentage.

*/
//Create two numbers and calculate their sum.

let name = 'goodnews';
let num_1 = 19;
let num_2 = 82;
let num_3 = '12345';
let sum = '';

sum = num_1 + num_2;
console.log(
  `Hello, ${name.trim().toUpperCase()}. The addition of ${num_1} and  ${num_2} is : ${sum}`,
);
console.log(`And the length of my name is: ${name.length}.`);
console.log(`Is the number 8 in ${num_3}?: ${num_3.includes('8')}`);

//Calculate the difference between 100 and 35.
let x = 100;
let y = 35;
let diff = x - y;

console.log(`The difference between ${x} and ${y} is: ${diff}`);

//A phone costs ₦250,000. Calculate the price after a 10% discount.
/*
To calculate a discount, multiply the original price by the discount percentage as a decimal, 
then subtract that amount from the original price.

*/
let phonePrice = 749920;
const discount = 0.1; //   10/100 = 0.1
let originalPrice = phonePrice * discount;
let discountPrice = phonePrice - originalPrice;
console.log('');
console.log('==================== Flash Sale ====================');
console.log('Production: TECNO CAMON 50 ULTRA 8GB + 512GB (CN7c)');
console.log(`The original price is:₦${phonePrice}`);
console.log(`Discounted price is: ₦${discountPrice}`);
console.log('');
//Create score = 50 and increase it by 20.

let score = 50;
console.log(`Your score is: ${score} points.`);
score += 20;
console.log(`Your new score is: ${score} points.`);
console.log('');
//Calculate the average of five numbers.

let a = 82;
let b = 23;
let c = 30;
let d = 12;
let e = 10;

let sum_num = a + b + c + d + e;
let avg = sum / 5;
console.log(`The sum of the numbers is:${sum_num}`);
console.log(`The average of the numbers is:${avg}`);

// Determine whether 47 is even or odd using %.

let num = 47;
if (num % 2 === 0) {
  console.log(`The number ${num} is even`);
} else {
  console.log(`The number ${num} is odd `);
}
console.log('');
// A product costs ₦15,000. Add 7.5% tax.
console.log('');
let productName = 'Tecno Fridge';
let productPrice = 15000;
const tax = 0.075;
let taxCalculation = productPrice * tax;
let totalCost = productPrice + taxCalculation;
console.log(`Product Name: ${productName}`);
console.log(`Subtotal: ₦${productPrice}`);
console.log(`VAT (7.5%) : ₦${taxCalculation}`);
console.log(`Total: ₦${totalCost}`);
console.log('');
console.log('Thank you for your purchase.');
