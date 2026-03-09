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