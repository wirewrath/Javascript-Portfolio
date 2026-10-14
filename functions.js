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