/*
A function is a group of statements that exist within a program for the
purpose of performing a specific task.



Functions are Code Blocks
Functions are reusable code blocks designed to perform a particular task.
Functions are executed when they are called or invoked.
Functions are fundamental in all programming languages.
*/

// More about function
// function - Input(argument) - Code - Output(return)
let greetUser = function () {
  console.log('Welcome User.');
};
greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};
let number = 3;
let resultValue = square(number);
console.log(`The square of ${number} is:${resultValue}`);

let fahreintCelcius = function (F) {
  let celcius = (F - 32) * (5 / 9);
  return celcius;
};
let numFahreint = 20;
let numFahreint1 = 25;
let resultVal = fahreintCelcius(numFahreint);
let resultVal1 = fahreintCelcius(numFahreint1);

console.log(`${numFahreint}°F is: ${resultVal}`);
console.log(`${numFahreint1}°F is: ${resultVal1}`);

//Exercises

/*
Write a program that asks the user to enter a distance in kilometers, and then converts that
distance to miles. The conversion formula is as follows:
miles = kilometer * 0.6214
*/
//Note: Input(argument), Code (Perform Operation), Output (return)
let distanceMiles = function (kilometer) {
  //Input = kilometer
  //Perform Operation
  const NUM = 0.6214;
  let miles = kilometer * NUM;
  //Output
  return miles;
};


// Ask the user for input
let kilometerValue = Number(prompt('Enter distance in kilometers: '));
//Calling the function
let kilometerValue1 = 60;
let kilometerValue2 = 120;
let finalDistanceInMiles1 = distanceMiles(kilometerValue1);
let finalDistanceInMiles2 = distanceMiles(kilometerValue2);
console.log(
  `The distance covered in ${kilometerValue1} kilometers is: ${finalDistanceInMiles1} miles.`,
);

console.log(
  `The distance covered in ${kilometerValue2} kilometers is: ${finalDistanceInMiles2} miles.`,
);
