let levels = ["forest", "desert", "castle"];
console.log(levels);
console.log(levels[0]);
console.log(levels[2]);
console.log(levels[-1]);
console.log(levels.length);
console.log(levels[levels.length - 1]);

//using push
levels.push("dungeon");
console.log(levels);
console.log(levels.length);

//using pop
let removedLevel = levels.pop();
console.log("Removed:", removedLevel);
console.log("Now levels is:", levels);
console.log("New length:", levels.length);

//putting it all together
let inventory = ["sword", "shield", "potion"];

console.log(inventory[1]);

inventory.push("helmet");

let removedItem = inventory.pop();
console.log("Removed:", removedItem);

console.log(inventory);
console.log(inventory.length);