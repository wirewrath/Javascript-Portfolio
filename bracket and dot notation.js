let profile = {
    name: "wireWrath",
    age: 30
};

console.log(profile);
//dot notation
console.log(profile.name);
console.log(profile.age);
profile.name = "WireWrath"; //updates profile name to the new name.
console.log(profile.name);
//bracket notation
console.log(profile["name"]);
//when the key is stored in a variable dot
//notation will no longer work but
//bracket notation will
let key = "name";

console.log(profile.key);      // 1 returns undefined
console.log(profile[key]);     // 2 returns the updated name
// mixing dot and bracket notation
profile.country = "USA";
profile.age = 38;
let chosenKey = "country";

console.log(profile[chosenKey]);
console.log(profile.age);
console.log(profile.country)
