//2 ways
let nums = [10, 20, 30];

function logNumber(n, index) {
  console.log("Index:", index, "Number:", n);
}

nums.forEach(logNumber);

//inline arrow function
let nums = [10, 20, 30];

nums.forEach((n, index) => {
  console.log("Index:", index, "Number:", n);
});

// forEach() always returns undefined;
// use map() or reduce() to return values
// forEach is for side effects only
// and does not return a new value

let nums = [10, 20, 30];

let result = nums.forEach((n, index) => {
  console.log("Index:", index, "Number:", n);
});

console.log("Result is:", result);

const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((item, index) => {
  console.log(`Item at index ${index} is ${item}`);
  });

// Example: Using forEach to calculate a total sum
let sum = 0;
let prices = [5, 15, 20];

prices.forEach((price) => {
    sum += price;
});

console.log("Total sum:", sum);


// map() transforms each element and
// returns a brand-new array
// Example: Using map() to transform elements into
// a new array
let numbers = [1, 2, 3];

let doubledNumbers = numbers.map((n) => {
    return n * 2;
});

console.log("Original array:", numbers);        // [1, 2, 3]
console.log("Transformed array:", doubledNumbers); // [2, 4, 6]

//another example of using map() with the same result
const nums = [1, 2, 3, 4];

const doubled = nums.map(n => n * 2);

console.log("original:", nums);
console.log("doubled:", doubled);

//using filter() example
const numbers = [1, 2, 3, 4];

const evens = numbers.filter(n => n % 2 === 0);

console.log("original:", numbers);
console.log("evens:", evens);

const nums = [1, 2, 3, 4];

const a = nums.map(n => n * 10);
const b = nums.filter(n => n * 10);

console.log(a)
console.log(b)

const nums = [1, 2, 3];

const good = nums.map(n => n * 2);

const weird = nums.map(n => {
  n * 2;
});

console.log(weird) // returns undefined

const nums = [1, 2, 3];

const good = nums.map(n => n * 2);

const weird = nums.map(n => {
  n * 2;
});

const fixed = nums.map(n => {
  return n * 2;
});

console.log("good:", good);
console.log("weird:", weird);
console.log("fixed:", fixed);

const nums = [1, 2, 3, 4];

const result = nums
  .map(n => n * 2)
  .filter(n => n > 5);

console.log("original:", nums);
console.log("result:", result);