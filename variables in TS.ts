//explicit type
let title: string = "Developer";
let score: number = 100;
let isAdmin: boolean = true;

console.log(title, score, isAdmin);
//when we assign string number boolean in
//typescript this way it must match the correct type
//or it will send an error even before running

//inferred type
let userName: string; "Wire"
let age = 1;
let isAlive = false;

userName = "WireWrath";
age = 38;
isAlive = true;

console.log(userName, age, isAlive);

//explicit return value
function add(x: number, y: number): number {
    return x + y;
}
//non-reusable return value
function logSum(x: number, y: number): void {
    console.log(x + y)
}
logSum(2, 10);

//using a string as a return value for numbers
function signLabel(n: number): string {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(signLabel(5));
console.log(signLabel(-3));
console.log(signLabel(0));


