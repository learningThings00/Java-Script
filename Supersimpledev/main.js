// document.body.innerHTML = 'Good Mornin!';
// alert('Hello');
Math.round(2.33);// doesn't shows cause it is not in console.log
console.log(Math.round(2.33));
console.log(Math.round((2090 + 799)* 1) / 100);


//Exercise 2


const soup = 10;
const burger = 8;
const iceCream = 5;

console.log(`Total bill: ${soup + burger * 3 + iceCream}`);

const totalBill = soup + burger * 3 + iceCream;

console.log(`share per person: ${totalBill / 3}`);

const toaster = 18.50;
const shirt = 7.50;

const toasterBill = toaster + shirt * 2;

console.log(`Total cost: ${toasterBill}`);

console.log(`Tax: ${toasterBill * 0.1}`);

console.log(`Extra Tax: ${toasterBill * 0.2}`);

const slotToaster = 18.99;
const tShirt = 7.99;
const ball = 20.95;
const shipping = 4.99;

const ballBill = ((slotToaster * 100) + (tShirt * 100) + (ball * 100)) / 100;

console.log(`Total bill: ${ballBill}`);

const beforeTax = ((ballBill * 100) + (shipping * 100)) / 100

console.log(`Total before Tax: ${beforeTax}`);

const tax = Math.round(beforeTax * 10) / 100

console.log(`Estimate tax: ${tax}`);

console.log(`Order total: ${beforeTax + tax}`);

// rounding off to upper value

const upperNum = 2.2;
const upperNegNum = -2.2;

console.log(Math.round(upperNum));
console.log(Math.ceil(upperNum));
console.log(Math.round(upperNegNum));
console.log(Math.ceil(upperNegNum));

// Rounding off to lower value

const lowerNum = 2.8;
const lowerNegNum = -2.8;

console.log(Math.round(lowerNum));
console.log(Math.floor(lowerNum));
console.log(Math.round(lowerNegNum));
console.log(Math.floor(lowerNegNum));

// Tries to reach towards 0

console.log(Math.trunc(lowerNegNum));
console.log(Math.trunc(lowerNum));
console.log(Math.trunc(upperNegNum));
console.log(Math.trunc(upperNum));


// Temperature Conversion

//Celcius = (Farenheit -32) * 5/9
//Farenheit = (Celcius * 9/5) + 32

console.log(`25C = ${(25 * 9/5) + 32}F`);
console.log(`86F = ${(86 - 32) * 5/9}C`)
console.log(`-5C = ${(-5 * 9/5) + 32}F`)