let city = 'Lagos';
let country = 'Nigeria';
let location = city + ' ' + country;

console.log(`You are from ${location}.`);

// Practice Exercises

/*Level 1 — Variables Basics
1.	Create a variable called studentName and store your name in it.
2.	Create a variable called age and store your age.
3.	Create a const variable called country and store your country.
4.	Create variables for courseName, schoolName, and learningHours.
5.	Print all five variables to the console.
6.	Create a variable called score with a value of 50. Change it to 75 and print it.
7.	Create a const variable called birthYear. Try changing its value. Observe the error.
8.	Create firstName and lastName variables and print each one separately.
9.	Create a variable called favoriteFood and print: "My favorite food is ___."
10.	Create three variables: productName, price, and quantity. Print their values.
*/
//Create a variable called studentName and store your name in it.
const studentName = 'Nwankpa Goodnews';
console.log(`Your name is ${studentName}.`);

//Create a variable called age and store your age.
let age = 35;
console.log(`You are ${age} years old.`);

//	Create a const variable called country and store your country.
const myCountry = 'Nigeria';
console.log(`You are from ${myCountry}.`);

//Create variables for courseName, schoolName, and learningHours.
const courseName = 'Javascript';
const schoolName = "G'news Technologies";
const learningHours = 4;

console.log(
  `You are learning ${courseName} at ${schoolName} and you study hour is: ${learningHours}`,
);

//Create a variable called score with a value of 50. Change it to 75 and print it.
let score = 50;
score = 75;
console.log(`Your score is ${score}.`);

//Create a const variable called birthYear. Try changing its value. Observe the error
const birthYear = 2001;
//birthYear = 2022;
//console.log(`Your birth year is ${birthYear}.`);
console.log('JavaScript will stop at this line: birthYear = 2022;');
console.log('because birthYear was declared using const.');
console.log(
  "You'll get an error similar to: TypeError: Assignment to constant variable.",
);

//Create firstName and lastName variables and print each one separately.
let firstName = 'Goodnews';
let lastName = 'Nwankpa';
console.log(`My firstname is: ${firstName}.`);
console.log(`My lastname is: ${lastName}.`);

// Create a variable called favoriteFood and print: "My favorite food is ___."
let favoriteFood = 'pounded yam and vegetable soup';
console.log(`My favourite food is ${favoriteFood}.`);

// Create three variables: productName, price, and quantity. Print their values.
let productName = 'iPhone 18 pro max';
let price = '₦1,727,670 ';
let quantity = 10;
console.log('');
console.log('========= PRODUCT DETAIL ===========');
console.log(`Product Name: ${productName}.`);
console.log(`Product Price: ${price}.`);
console.log(`Product Quantity: ${quantity}.`);
console.log('====================================');
