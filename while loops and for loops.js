let count = 5;
while (count > 0) {
  console.log(count);
  if (count === 3) {
    break;
  }
  count = count - 1;
}

let n = 1;
while (n <= 10) {
  console.log(n);
  if (n === 7){
    break
  }
  n = n + 1
}

for (let i = 0; i < 3; i = i + 1) {
    console.log(i);
}

let animals = ["cat", "dog", "bird"];

for (let i = 0; i < animals.length; i = i + 1) {
    console.log(i, animals[i]);
}

let nums = [10, 20, 30, 40];

for (let i = 0; i < nums.length; i = i + 1) {
    console.log("index:", i, "value:", nums[i]);
}
//in python this would be similar to for animal in animals: print animal
for (let animal of animals) {
    console.log(animal);
}

let animals = ["cat", "dog", "bird"];

for (let animal of animals) {
    console.log(animal);
}
//examples of both
let nums = [5, 10, 15];

console.log("classic for:");
for (let i = 0; i < nums.length; i = i + 1) {
    console.log("index:", i, "value:", nums[i]);
}

console.log("for...of:");
for (let value of nums) {
    console.log("value:", value);
}
//use classic when you need the index. use for of when
//you dont need to see the indexes

let letters = ["a", "b", "c", "d"];

for (let i = 0; i < letters.length; i = i + 1) {
    console.log("start of loop, i =", i);
    console.log("value at i:", letters[i]);
    console.log("end of loop\n");
}

let scores = [3, 7, 10];

console.log("classic for:");
for (let i = 0; i < scores.length; i = i + 1) {
    console.log("i =", i, "score =", scores[i]);
}

console.log("for...of:");
for (let score of scores) {
    console.log("score =", score);
}

//for (let value of array) { ... }  // values
//for (let key in objectOrArray) { ... }  // keys (like indexes)

let names = ["Wire", "Wrath", "Vixo"];

console.log("classic for:");
for (let i = 0; i < names.length; i = i + 1) {
    console.log("i =", i, "Name =", names[i]);
}

console.log("for...of:");
for (let name of names) {
    console.log("Name =", name);
}

