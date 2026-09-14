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

/*
Level 2 — String Practice
11.	Store "JavaScript" in a variable and print its length.
12.	Store your full name and convert it to uppercase.
13.	Store your full name and convert it to lowercase.
14.	Create a string with spaces before and after it. Use trim() to clean it.
15.	Check whether "JavaScript" contains the word "Script" using includes().
16.	Create a sentence and use slice() to extract part of it.
17.	Create firstName and lastName, then combine them into a fullName using +.
18.	Repeat the previous task using a template literal.
19.	Create a courseName variable and produce: "I am learning JavaScript."
20.	Create a city variable and produce: "I live in Lagos."
*/

//	Store "JavaScript" in a variable and print its length.

let courseName1 = 'Javascript';
const courseNameLength = courseName1.length; // This line of code gets the length of a string
console.log(`The length of the word ${courseName1} is : ${courseNameLength}.`);

//Store your full name and convert it to uppercase.

let fullName = 'nwankpa ikechkwu goodnews';
const fullNameLength = fullName.length;
//This line of code convert the fullname into uppercase
const fullNameUpper = fullName.toUpperCase();
console.log(`The length of your fullname is: ${fullNameLength}`);
console.log(`Your fullname converted to uppercase is: ${fullNameUpper}.`);

// Store your full name and convert it to lowercase.
let fullName1 = 'orson benaiah chinonso nwankpa';
//This line of code gets the length of the fullname
const fullName1Length = fullName1.length;
//This line of code convert the fullname to uppercase
const fullName1Upper = fullName1.toUpperCase();
// This line of code convert the fullanme to lowercase
const fullName1Lower = fullName1.toLowerCase();
console.log('');
console.log('====== Personal Details ======');
console.log(`Your fullname is: ${fullName1}`);
console.log(`The length of your fullname is: ${fullName1Length}`);
console.log(`Your fullname in uppercase is: ${fullName1Upper}.`);
console.log(`Your fullname in lowercase is: ${fullName1Lower}.`);
console.log('================================');

// 	Create a string with spaces before and after it. Use trim() to clean it.

let lang = '   Javascript Learning Path  ';
const langTrim = lang.trim();
// printing the string before using trim
console.log(lang);
console.log(`The length of the string before trimming is: ${lang.length}.`);

// printing the string after using trim
console.log(langTrim);
console.log(`The length of the string after trimming is: ${langTrim.length}.`);

//Check whether "JavaScript" contains the word "Script" using includes().
let courseChecker = 'JavaScript';
courseCheckerIncludes = courseChecker.includes('Script');
console.log(`Is the word Script in JavaScript ? ${courseCheckerIncludes}`);

let name1 = 'Goodnews';
const nameChecker = name1.includes('y');
console.log(`Is the word y in Goodnews ? ${nameChecker}`);

//Create a sentence and use slice() to extract part of it.
let sentence = 'Javascript is awesome and beginner-friendly';
const sentenceSlice = sentence.slice(0, 10);
//Slicing refers to extracting a portion of an array
// or a string without modifying the original data
console.log(`This is the original sentence: ${sentence}.`);
console.log(
  `This is the slice sentence from the original sentence: ${sentenceSlice}.`,
);
console.log(`This is the length of the original sentence: ${sentence.length}`);
console.log(
  `This is the length of the slice sentence: ${sentenceSlice.length}`,
);
console.log(sentenceSlice.toLowerCase());
console.log(sentenceSlice.toUpperCase());
