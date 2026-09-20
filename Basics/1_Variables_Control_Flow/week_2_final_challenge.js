/*
This execrcise involve all we have learnt so far
A restaurant receives an order from a customer.


Check if the username contain spaces
Check if the username name contains special characters
Check the length of the username. Return the first character for each name in the string  using slice.
Capitalize the first character of the firstname return. (hint: let firstChar = name.slice(0,1)
then convert it to upperCase let firstUpper = firstChar.toupper() )

Isolate the rest of the name using slice
Hint: let restName = firstname.slice(1,name.length)
Now concantentate the firstchar and the rest of the name and greet the user.




This line is for arimarhics

Below ₦30,000 → 0% discount
₦30,000–₦49,999 → 10% discount
₦50,000+ → 15% discount
VAT → 7.5% after discount

Display:

Customer name
Original order
Discount rate
Discount amount
Amount after discount
VAT rate
VAT amount
Final amount
*/

let customerName = 'goodnews ikechuwkwu nwankpa';
//Check if the username contain spaces
customerName = customerName.trim();
//Check if the username name contains special characters
let hasSpecialCharacter =
  customerName.includes('@') ||
  customerName.includes('#') ||
  customerName.includes('$');
//Check the length of the username. Return the first
// character for eachname in the string  using slice.
let customerNameLength = customerName.length;
//Return the first character for each name in the string  using slice.

//Get the remaining character in the firstname goodnews
//First extract the first name, middlename, lastname
//slice() takes a portion of a string and returns it as a new string.
//string.slice(start, end)
//Start at position 0 and take characters up to, but not including, position 8.
let firstName = customerName.slice(0, 8);
//Extracting the first character from the firstname
let firstChar = customerName.slice(0, 1);
//Get the remaining character from the firstname
let firstCharRemain = firstName.slice(1, firstName.length);
// Make the first character of your name UPPERCASE AND CONCANTENTATE IT
firstChar = firstChar.toUpperCase();
// get the middle name
let middleName = customerName.slice(8, 19);
// Extract the firstcharacter of the middlename
let firstCharMiddle = middleName.slice(0, 2);
firstCharMiddle = firstCharMiddle.toUpperCase();
// Get the remaining character of the middlename
let middleNameRemain = middleName.slice(2, middleName.length);
// Get the lastname
let lastName = customerName.slice(20, 27);
// Get the first character of the lastname
let firstCharLast = lastName.slice(0, 1);
// Make the firstcharacter uppercase
firstCharLast = firstCharLast.toUpperCase();
//Get the remaining character of the lasname

let lastNameCharRemain = lastName.slice(1, lastName.length);
//Combine all 3 names together
console.log(
  `Hello, ${firstChar + firstCharRemain + firstCharMiddle + middleNameRemain + ' ' + firstCharLast + lastNameCharRemain}.`,
);
