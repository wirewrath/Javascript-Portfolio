//using a callback
let attackAction = function() {
    console.log("Attacking!");
};

function runAction(action) {
    action();
}

runAction(attackAction);

let attackAction = function() {
    console.log("Attacking!");
};

let defendAction = function() {
    console.log("Defending!");
};

function runAction(action) {
    action();
}

runAction(attackAction);
runAction(defendAction);

//anon functions
setTimeout(function() {
    console.log("HEY!");
}, 1000);

function runLater(task) {
    console.log("About to run task...");
    task();
}

runLater(function() {
    console.log("Running anonymous task now!");
});

//arrow functions

const hello = () => {
    return "hello";
};

console.log(hello());
//no need for {}
const hello = () => "hello";
console.log(hello())

const square = (n) => n * n;

console.log(square(4));

const greet = (name) => "Hello, " + name + "!";

console.log(greet("Wirewrath"))

const multiply = (a, b) => a * b;

const shout = text => text.toUpperCase() + "!";

console.log(multiply(4, 5));
console.log(shout("hello"));
