/*
=== -Equality operator
!== - Not equal operator.
< - less than
> - greater than
<= less than or equal
>= greater than
*/
let temp = 31;
let isFreezing = temp === 32;
console.log(isFreezing);

let UserName = ' Good@news$';
let nameHasSymbol = UserName.includes(' ', '@', '$');

console.log(`Those the name contain any symbols: ${nameHasSymbol}`);

// Code challenge
let age = 40;
let isChild = age <= 7;
let isAdult = age >= 18;
console.log(isChild);
console.log(isAdult);
