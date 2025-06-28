// primitive data types:

// 7 types : String , Number ,Boolean ,null , undefined , symobl , BigInt

//Javascript is Dynamically typed.

const score = 100;

const scoreValue = 15.5;

const isLoggedIn = true;

const temp = null;

let user = undefined;

const id = Symbol('122');
const id2 = Symbol('122');

const bigNumber = 3232352323255;
console.log(bigNumber);


console.log(id === id2);



// Refernce type / Non Primitive

// Arrays,Objects,functions

const Heros = ["Superman","batman"]; // array

let myObj = {
    name: "ahmad",   // objects
    Age: 22
}

const myfunction = function(){   // function

    console.log("Hello World");
    
}


console.log(typeof score);

console.log(typeof scoreValue);

console.log(typeof isLoggedIn);

console.log(typeof temp);

console.log(typeof user);

console.log(typeof id);

console.log(typeof Heros);

console.log(typeof myObj);

console.log(typeof myfunction);
