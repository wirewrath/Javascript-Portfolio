let original = [1, 2, 3];
let copy = original;

copy[0] = 999;

console.log("original:", original);
console.log("copy:", copy);
//can cause hidden bugs by having 2 names for 1 array

//how to copy the original array and make changes
let original = [1, 2, 3];
let copy = [...original];   // real (shallow) copy

copy[0] = 999;

console.log("original:", original);
console.log("copy:", copy);

let game = {
  name: "Zelda",
  tags: ["adventure", "single-player"]
};

let gameCopy = { ...game };

gameCopy.tags.push("fantasy");

console.log("game:", game);
console.log("gameCopy:", gameCopy);

let coords = [10, 20, 30];

console.log("array:", coords);
console.log("unpacked:", ...coords);

let base = { name: "Alice", score: 10 };
let bonus = { score: 50 };

let merged = { ...base, ...bonus };
// merged.score is 50 (bonus overrides base
console.log(merged)

