console.log("5" == 5);
console.log("5" === 5);
// use === because it is stricter than ==; !== is the reverse and is stricter than !=

console.log("5" == 5);
console.log("5" === 5);
console.log("5" === "5");
//reversed
console.log("5" != 5);
console.log("5" !== 5);
console.log("5" !== "5");

//undefined variable
let x;
console.log(x);

//null
let y = null;
console.log(y);

//difference in how == and === sees null

//looser and comes back as true
console.log(null == undefined);
//stricter and comes back as false
console.log(null === undefined);

let a;
let b = null;

console.log(a);                 // line 1
console.log(b);                 // line 2
console.log(a == b);            // line 3
console.log(a === b);           // line 4
console.log(a === undefined);   // line 5
console.log(b === null);        // line 6

//using null and undefined in if statements
let a;
let b = null;

//truthy and falsy
if (a) {
  console.log("a is truthy");
} else {
  console.log("a is falsy");
}

if (b) {
  console.log("b is truthy");
} else {
  console.log("b is falsy");
}

if (0) {
  console.log("0 is truthy");
} else {
  console.log("0 is falsy");
}

if ("0") {
  console.log('"0" is truthy');
} else {
  console.log('"0" is falsy');
}

if ("") {
  console.log('"" is truthy');
} else {
  console.log('"" is falsy');
}

let username = null;

if (username === null || username === undefined) {
    console.log("No username provided");
} else {
    console.log("Username is: " + username);
}
