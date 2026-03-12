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

//Working with strings

const string1 = 'John';
const space = ' ';
const string2 = 'Doe';

console.log(`My name is ${string1 + space + string2}`);

const dollar = '$';
const coffee = 5;
const bagel = 3;

//concatenation method

console.log('Total cost: $' + coffee + bagel);//if we don't use the brackets js will add all of them like strings so answer will be $53

// to counter this we surround the math part in a bracket to change the order of operation

// the order of operation are
// 1 (..)
// 2 * /
// 3 + -
console.log('Total cost: $' + (coffee + bagel));

//template method

console.log(`Total cost: ${dollar + (coffee + bagel)}`);

const diffCoffee = 5.99;
const diffBagel = 2.95;
const coffeeBill = ((diffCoffee * 100) + diffBagel * 100) / 100;
//concatenation
console.log('Total cost : $' + coffeeBill);
//Template string and interpolation
// interpolation is a feature of a template string that allows to insert other value inside of the string
console.log(`Total cost : ${dollar + coffeeBill}`);

// inserting line break \n

console.log(`Total const : ${dollar + coffeeBill}\nThank you, come again`);

  // alert(`Total const : ${dollar + coffeeBill}\n\nThank you, come again`);

  //bill of amazon 

  const billBall = ((2*ball*100) + (2*tShirt*100)) / 100;
  const sum =  (billBall + (2 * shipping));
  const taxSum = Math.round(sum * 10) / 100;
  console.log(`Items (${2*1 + 2*1}): ${dollar + billBall
  }\nShipping & handling: ${dollar + (2*shipping)}\nTotal before tax: ${dollar + sum}\nEstimate tax(10%): ${dollar + taxSum}\nOrder Total: ${dollar + (sum + taxSum)}`);

  //Variable - three ways to create
  // when used with let, it change its value after reasigning
  //when used with const it is much more rigit and can't be changed
  // var is also a way to create variables but it is not used in newer javaScript due some issues
  // we must almost always use const cause it reduces the chances of error later.

  let cartQuantity = 0;

  /*writing shortcuts - 
   x = x + 1 => x++
   x = x + 2 => x += 2
   x = x - 1 => x--
   and so on we can use other signs as well like * / etc*/

// basic working calculator

let calc = '';

//boolean - represents whether something is true or false

console.log(5 < 6);//gives - true
console.log(5 > 6);//gives - false
console.log(typeof true);//gives - boolean
console.log(typeof 'true');//gives - string, because we used '' it makes it a string

/* COMPARISON OPERATOR
 > , < , >= , <= , === , == , !==(not equal to) */
 //comparison operator have lower priority than math operator in order of operation
 // difference between === and ==
 // === checks more strictly and the values should be of same data type or else the answer will be false
 // == checks the value not the data type it assumes all of them as same data type like - 5 == '5.00'

 console.log(5 == '5.00');//gives true
 console.log(5 === '5');//gives false
 console.log(5 === 5);//gives true

 // there is also != which has same conversion bhaviour like == thats why we always use === and !== in javaScript

//if statements
//it is used to get desired output according to false or true statement
//it runs if code if the statement is true and runs else code if the statement is false
//else statement is optional
//we can add as many branches as we want using else if

//if we need to run a single line of code we can remove the {...}from branches but it is best practive to use them either way

if (20 >= 19) {
  console.log('You can Drive');//this is called a branch
} else {
  console.log("You can't Drive");//this is another branch
}

//Algorithm - a set of steps to complete the task or to solve a problem

//Math.random() - generates a random number between 0 and 1
//actually 0 <= and < 1

console.log(Math.random());

//logical operator 
// in order of operation logical operators has lower priority than math and comaparison operator
//&& (and operator) - checks if both the sides are true

// t && t - t, t && f - f, f && f - f

console.log(500 > 400 && 500 < 600);

//|| (or operator) - checks if atleast one side is true

console.log(true || false);

//! (not operator) - uses only one boolean value and converts it into the operator value

console.log(!true);// gives false

//the names inside the scope is independent of outside the scope, it helps us to avoid naming conflicts
//to counter this we use an empty string outside of scope of same name

//VAR on the other hand can have the naming conflict inside of scope thats why we don't use var anymore, doesn't follow the rule of scope