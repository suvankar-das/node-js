// modules protect their variable and functions from leaking.
// You cannot access variable and function directly , You have to give access

console.log("inside calculator.js");

function calculate(a, b) {
    return a + b;
}

let name = "Suvankar";

// giving access to calculate function.
//module.exports = calculate;

// now If you want to pass multiple data , You need to pass those as an object
