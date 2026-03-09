const userName = "John Doe";
let userAge = 22;
let isProffesional = true;

if (isProffesional === true) {
  console.log(`Welcome Back ${userName}`);
} else {
  console.log("You are not him");
}

if (userAge >= 18) {
  console.log("Good to go!");
} else {
  console.log(`Come back later ${userName}`);
}

//counting 

for (let i = 1; i <= 20; i++) {
  console.log(`Age: ${i}`)
}

const goals = ["HTML", "CSS", "JavaScript"];

for(let i = 0; i < goals.length; i++) {
  console.log(`Goal${i + 1}: ${goals[i]}`);
}

for (let i = goals.length - 1; i >= 0; i--) {
  console.log(`Goal${i + 1}: ${goals[i]}`);
}

for (let i = 0; i < goals.length; i = i + 2) {
  console.log(`Goal${i + 1}: ${goals[i]}`);
}

for (let i = 0; i < goals.length; i++) {
  if (goals[i] === "HTML") {
    console.log(`${i + 1} Found it`);
  } else {
    console.log("No Match Found");
  }
}

// alert('Hello world!')

console.log('Hello!');
console.error('Error 404');
console.warn('This is a Warning');

console.log(2 + 5);

//const can't be changed or reasigned
 const Age = 10;
 console.log(Age);

//Let can be changed later
let Score = 100;
Score = 122;
console.log(Score);

//always use const unless you know you are gonna reasign the value.

//Premitive data types: Strings, Numbers, Boolean, null, undefined, (symbols)

const name = "John";
const age = 32;
const ratio = 4.5;
const isProfessional = true;
const x = null;
const y = undefined;
let z;
console.log(typeof name);
console.log(typeof age);
console.log(typeof ratio);
console.log(typeof isProfessional);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);


//strings

//concatination - old method not used

console.log('Hello my name is ' + name + ' and I am ' + age + ' year old');

//Template Strings

console.log(`Hello my name is ${name} and I am ${age} year old`);

//or

const  hello = `Hello my name is ${name} and I am ${age} year old`;

console.log(hello);

const a = 'Well Done!';

console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.substring(0, 4).toUpperCase());

console.log(a.substring(0, 4).toLowerCase(), a.substring(5, 11).toUpperCase());

console.log(a.split(''));
console.log(a.split(' '));

const names = 'Alex, Charlie, Bennet, Jean';
console.log(names.split(','));

//Arrays - variables that hold multiple values

//constructor - old method not used

const numbers = new Array(1,2,3,4,5,6,7,8,9);

console.log(numbers);

// square brackets - can also include different data types like a string array can have a num or boolean too

const fruits = ['Mango', 'Guava', 'Pineapple', 'Orange'];
fruits[3] = 'grapes';//we change the specific strings with this too
fruits[4] = 'Watermelon';
fruits.push('Apple');
fruits.unshift('Orange');
fruits.pop();//pops the last one

console.log(Array.isArray(fruits));// checks if it is array or not

console.log(fruits.indexOf('Pineapple'));// tells us about the index value of any value in arr

console.log(fruits);
console.log(fruits[1], fruits[3]);//only specific string

//Object Literals - value Pairs

const person = {
firstName: 'John',
lastName: 'Doe',
age: 32,
hobbies: ['Chess', 'Tennis', 'Travelling'],
address: {
  street: '23 Main st',
  city: 'Boston',
  state: 'MA'
}
} 

console.log(person);

console.log(person.firstName, person.lastName, person.hobbies[1], person.address.city);

//advance new feature
const { firstName, lastName, address: { city }} = person;

console.log(firstName, lastName, city);

// we can add properties later too

person.email = 'johndoe@gmail.com';