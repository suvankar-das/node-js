// modules protect their variable and functions from leaking.
// You cannot access variable and function directly , You have to give access

console.log("inside calculator.js");

function calculate(a, b) {
    return a + b;
}

let Id = "1001";

let personDetails = {
    Id: Id,
    name: "Suvankar"
}


export const personObj = personDetails;
export const calc = calculate;
