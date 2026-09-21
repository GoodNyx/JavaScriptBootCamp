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

// Remove spaces from beginning and end
customerName = customerName.trim();

// Check for special characters
let hasSpecialCharacter =
  customerName.includes('@') ||
  customerName.includes('#') ||
  customerName.includes('$');

// Check name length
let customerNameLength = customerName.length;

// Extract first name
let firstName = customerName.slice(0, 8);

// Get first character of first name
let firstChar = firstName.slice(0, 1);

// Convert first character to uppercase
let firstUpper = firstChar.toUpperCase();

// Get remaining characters
let restName = firstName.slice(1, firstName.length);

// Combine first character and remaining characters
let formattedFirstName = firstUpper + restName;

// Extract middle name
let middleName = customerName.slice(8, 19);

// Get first character of middle name
let middleFirstChar = middleName.slice(0, 1);

// Convert to uppercase
let middleFirstUpper = middleFirstChar.toUpperCase();

// Get remaining characters
let middleRest = middleName.slice(1, middleName.length);

// Combine middle name
let formattedMiddleName = middleFirstUpper + middleRest;

// Extract last name
let lastName = customerName.slice(20, 27);

// Get first character
let lastFirstChar = lastName.slice(0, 1);

// Convert to uppercase
let lastFirstUpper = lastFirstChar.toUpperCase();

// Get remaining characters
let lastRest = lastName.slice(1, lastName.length);

// Combine last name
let formattedLastName = lastFirstUpper + lastRest;

// Display result
console.log(
  `Hello, ${formattedFirstName} ${formattedMiddleName} ${formattedLastName}.`,
);

console.log(`Name length: ${customerNameLength}`);
console.log(`Contains special character: ${hasSpecialCharacter}`);
