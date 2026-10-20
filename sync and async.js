//async
console.log("A");
setTimeout(function () {
  console.log("B");
}, 1000); // 1000 ms = 1 second
console.log("C");

console.log("Start");

setTimeout(function() {
  console.log("Inside timeout");
}, 2000);

console.log("End");

console.log("First");

setTimeout(function() {
  console.log("Second (timeout)");
}, 500);

console.log("Third");

//sync example

console.log("Task 1: Starting the process");

// A heavy synchronous loop (this blocks
// everything else until it finishes)
let sum = 0;
for (let i = 0; i < 1_000_000_000; i++) {
  sum += i;
}
console.log("Task 2: Heavy calculation finished");

console.log("Task 3: All done!");