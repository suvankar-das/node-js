// var a = 10;
// console.log(this); // prints {}
// console.log(global == globalThis);
// console.log(global);


// let otherModuleObject = require("./calculator");

// let personDetailsObj = otherModuleObject.personObj;
// let calcu2 = otherModuleObject.calc(2, 2);

// console.log(personDetailsObj);
// console.log(calcu2);



// or using destructuring
let { calc, personObj } = require("./calculator");

let personDetailsObj = personObj;
let calcu2 = calc(2, 2);

console.log(personDetailsObj);
console.log(calcu2);
