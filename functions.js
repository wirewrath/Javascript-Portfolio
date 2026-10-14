//one line for each name this way
function greet(name) {
    console.log("Hello " + name);
}

greet("Wire");
greet("Wrath");

function greet(name) {
    return "Hello " + name;
}

let message = greet("Wire");
console.log(message);

//result will not return the value of result in console
function greet(name) {
    console.log("Hello " + name);
}

let result = greet("Thomas");
console.log("Result is:", result);
//but it will in the function

function getStats(a, b) {
    let sum = a + b;
    let product = a * b;
    return [sum, product];
}

let results = getStats(3, 4);
console.log(results);
console.log("Sum:", results[0]);
console.log("Product:", results[1]);

function getStats(a, b) {
    let sum = a + b;
    let product = a * b;

    return {
        sum: sum,
        product: product
    };
}

let stats = getStats(5, 6);
console.log(stats);
console.log("Sum:", stats.sum);
console.log("Product:", stats.product);

let attacks = [55, 72, 777, 80];
console.log(attacks);
function totalDamage(attacks) {
    let total = 0;
    for(let i = 0; i < attacks.length; i ++) {
        total += attacks[i];       
    }
    return total;
}

let total = totalDamage(attacks);
console.log("Total damage:", total);


//adding armor to the equation 
let attacks = [5, 2, 7, 10];
console.log(attacks);

function totalDamage(attacks) {
    let total = 0;
    for (let i = 0; i < attacks.length; i++) {
        total += attacks[i];
    }
    return total;
}

let total = totalDamage(attacks);
console.log("Total damage:", total);

function applyArmor(damage, armor) {
    let reduced = damage - armor;
    if (reduced < 0) {
    reduced = 0;
}
    return reduced;
}

let damageAfterArmor = applyArmor(total, 100);
console.log("Damage after armor:", damageAfterArmor);
