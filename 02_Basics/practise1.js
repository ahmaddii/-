const { log } = require("electron-builder");

const marvel_heros = ["Thor","Iron Man","Spider Man"];
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros); // it gives array ke ander aik or array
//console.log(marvel_heros);

const newHeros = marvel_heros.concat(dc_heros);
console.log(newHeros);

// another method to merge arrays is spread using ...

const sArray = [...marvel_heros,...dc_heros];
console.log(sArray);

const sArray2 = [1,2,3,4[5,6,7,[8,9]]];

const Result_Array = sArray2.flat(Infinity); // depth
console.log(Result_Array);

console.log(Array.isArray("Ahmad")); // check array ha ya ni

console.log(Array.from("Ahmad")); // from converts arrays

let score1 = 100;

let score2 = 200;

let score3 = 300;

console.log(Array.of(score1,score2,score3));

// of also merge all the values into an array