let age = 37;
if (age >= 35) {
    console.log('over age 35');
} else {
    console.log('Under age 35');
}
let temp = 8
// Checks if temp is BOTH >= 70 AND <= 90
if (temp >= 85 && temp <= 100) {
    console.log('Its a Hot day today');
} else {
    console.log('It is either too hot or too cold today');
}

let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
    console.log('store is not open today');
} else {
    console.log('Normal business hours');
}

let score = 87
if (score >= 90) {
    console.log('Grade is an A!');
} else if (score <= 89 && score >= 80) {
    console.log('Grade is a B!');
} else if (score <= 79 && score >= 70) {
    console.log('Grade is a C');
} else if (score <= 69 && score >= 60) {
    console.log('Grade is a D');
} else {
    console.log('You Failed');
}
//use === to check if values are equal, use = to set/change variables

let name = "Thomas";
//incorrect way.
console.log("Hello ${name}");
//must use `` "bacikticks"
console.log(`Hello ${name}`);
//another example of wrong vs right way
let a = 5;
let b = 7;

console.log("Sum: ${a + b}");
console.log(`Sum: ${a + b}`);

//2 ways of coding the same thing only one is cleaner.

//messy version
let firstName = "Thomas";
let language = "JavaScript";

console.log("Hello, my name is " + firstName + " and I am learning " + language + ".");

//cleaner version
let firstName = "Thomas";
let language = "JavaScript";

console.log(`Hello, my name is ${firstName} and I am learning ${language}.`);

//using equations
let price = 10;
let quantity = 3;

console.log(`Total cost: ${price * quantity} credits`);

let name = "Thomas";
let course = "JavaScript";
let days = 7;

console.log(`Hello ${name}!
Welcome to ${course}.
Course duration: ${days * 2} days.`);

//code from challenges

//first
let score = 0;
score = score + 10;
console.log(score);

// second
let myNumber = 42;
let myString = "hello";
let myBoolean = true;

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBoolean);

// third
let a = 5;
let b = "5";
let c = 1;

console.log(a + c);
console.log(b + c);
console.log(a + b);

// fourth
let age = 20;

if (age >= 18) {
    console.log("adult");
} else {
    console.log("minor");
}

// fifth
let isOpen = false;

if (isOpen === true) {
    console.log("Store is open");
} else {
    console.log("Store is closed");
}

// sixth
let score = 15;

if (score >= 10) {
    console.log("High score");
} else {
    console.log("Keep trying");
}
