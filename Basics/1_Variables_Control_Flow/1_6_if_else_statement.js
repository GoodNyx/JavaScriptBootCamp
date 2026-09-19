let isAccountLocked = false;
let useRole = 'user';
if (isAccountLocked) {
  console.log('Is account locked');
} else if (useRole === 'admin') {
  console.log('Welcome Admin');
} else {
  console.log('Welcome');
}

/*
Business Exercise
A restaurant has this rule:
Orders of ₦30,000 or more receive a 10% discount. Orders below ₦30,000 receive no discount.
*/
let itemOrder = 39000;
let itemDiscount = 0.1;
let finalAmount = '';

if (itemOrder < 30000) {
  console.log(`Your oder is ₦${itemOrder}`);
  console.log('Sorry, you are not entitled to a discount.');
} else if (itemOrder >= 30000) {
  console.log(`Your order is ₦${itemOrder}`);
  console.log('Congratulations, you are entitled to a discount.');
  let itemDiscountAmount = itemOrder * itemDiscount;
  finalAmount = itemOrder - itemDiscountAmount;
  console.log(`Your order is: ₦${itemOrder}`);
  console.log(`Discount Rate: ${itemDiscount * 100}%`);
  console.log(`Discount Amount: ₦${itemDiscountAmount}`);
  finalAmount = itemOrder - itemDiscountAmount;
  console.log(`Final Amount: ₦${Math.round(finalAmount)}`);
}





// 
// /*
//   🏪 Week 2 Capstone Project: Business Order Discount System

//   Business Rules:
//   - Below ₦30,000       → No discount
//   - ₦30,000–₦49,999    → 10% discount
//   - ₦50,000 and above   → 15% discount

//   VAT:
//   - 7.5% VAT is applied AFTER the discount.
  
//   Calculation Order:
//   Original Order
//        ↓
//   Discount
//        ↓
//   Amount After Discount
//        ↓
//   VAT
//        ↓
//   Final Amount
// */

let customerName = '  goodnews   ';
let customerOrder = 40000;

customerName = customerName.trim().toUpperCase();

let vatRate = 0.075;

console.log('===========================================================');
console.log('🏪 BUSINESS ORDER DISCOUNT SYSTEM');
console.log('===========================================================');

if (customerOrder >= 50000) {
  // 15% discount
  let discountRate = 0.15;
  let discountAmount = customerOrder * discountRate;

  // Amount after discount
  let amountAfterDiscount = customerOrder - discountAmount;

  // VAT calculation
  let vatAmount = amountAfterDiscount * vatRate;

  // Final amount
  let finalAmount = amountAfterDiscount + vatAmount;

  console.log(`Hello, ${customerName}`);
  console.log(
    `Congratulations! Your order qualifies for a 15% discount.`,
  );

  console.log('===========================================================');
  console.log('Payment Details');
  console.log('===========================================================');

  console.log(`Customer Name: ${customerName}`);
  console.log(`Order Amount: ₦${customerOrder}`);
  console.log(`Discount Rate: ${discountRate * 100}%`);
  console.log(`Discount Amount: ₦${discountAmount}`);
  console.log(`Amount After Discount: ₦${amountAfterDiscount}`);
  console.log(`VAT Rate: ${vatRate * 100}%`);
  console.log(`VAT Amount: ₦${vatAmount}`);
  console.log(`Final Amount: ₦${finalAmount}`);

} else if (customerOrder >= 30000) {
  // 10% discount
  let discountRate = 0.10;
  let discountAmount = customerOrder * discountRate;

  // Amount after discount
  let amountAfterDiscount = customerOrder - discountAmount;

  // VAT calculation
  let vatAmount = amountAfterDiscount * vatRate;

  // Final amount
  let finalAmount = amountAfterDiscount + vatAmount;

  console.log(`Hello, ${customerName}`);
  console.log(
    `Congratulations! Your order qualifies for a 10% discount.`,
  );

  console.log('===========================================================');
  console.log('Payment Details');
  console.log('===========================================================');

  console.log(`Customer Name: ${customerName}`);
  console.log(`Order Amount: ₦${customerOrder}`);
  console.log(`Discount Rate: ${discountRate * 100}%`);
  console.log(`Discount Amount: ₦${discountAmount}`);
  console.log(`Amount After Discount: ₦${amountAfterDiscount}`);
  console.log(`VAT Rate: ${vatRate * 100}%`);
  console.log(`VAT Amount: ₦${vatAmount}`);
  console.log(`Final Amount: ₦${finalAmount}`);

} else {
  // No discount
  let discountRate = 0;
  let discountAmount = 0;

  // No discount, so amount remains unchanged
  let amountAfterDiscount = customerOrder;

  // VAT calculation
  let vatAmount = amountAfterDiscount * vatRate;

  // Final amount
  let finalAmount = amountAfterDiscount + vatAmount;

  console.log(`Hello, ${customerName}`);
  console.log(
    `Sorry! Your order does not qualify for a discount.`,
  );

  console.log('===========================================================');
  console.log('Payment Details');
  console.log('===========================================================');

  console.log(`Customer Name: ${customerName}`);
  console.log(`Order Amount: ₦${customerOrder}`);
  console.log(`Discount Rate: ${discountRate}%`);
  console.log(`Discount Amount: ₦${discountAmount}`);
  console.log(`Amount After Discount: ₦${amountAfterDiscount}`);
  console.log(`VAT Rate: ${vatRate * 100}%`);
  console.log(`VAT Amount: ₦${vatAmount}`);
  console.log(`Final Amount: ₦${finalAmount}`);
}

console.log('===========================================================');
