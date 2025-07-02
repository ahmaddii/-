const marvel_heros = ["Thor","Iron Man","Spider Man"];
const dc_heros = ["superman","flash","batman"];

//marvel_heros.push(dc_heros);

//console.log(marvel_heros);
//console.log(marvel_heros[3][2]);

const newMarvel = marvel_heros.concat(dc_heros);  // concat gives you a new Array
console.log(newMarvel);  // merge the two arrays and give new one array to store elements

const all_new_heros = [...marvel_heros,...dc_heros]; // spread method for merging two arrays
console.log(all_new_heros);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = anotherArray.flat(Infinity); // you pass parameter as depth with your choice
console.log(real_another_array);

console.log(Array.isArray("Ahmad")); // check the give parameter is array or what 

console.log(Array.from("Ahmad")); // covert given values into array

console.log(Array.from({name:"Ahmad"})); // it gives empty array as when we dont declare with which thing you have to create array


let score1 = 100;

let score2 = 200;

let score3 = 300;

console.log(Array.of(score1,score2,score3)); // of converts the values into array
