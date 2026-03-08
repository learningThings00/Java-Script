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