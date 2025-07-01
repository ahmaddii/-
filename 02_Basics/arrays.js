// Array

const myArray = [2,3,4,5];
const myHeros = ['Ahmad','marvel'];

const myArr2 = new Array(1,2,3,4);

console.log(myArr2[1]);

//myArray.push(6); // push value in array
//myArray.push(7);
//myArray.pop(9)

//myArray.unshift(9);
//myArray.shift(); // remove the valuee

console.log(myArray.includes(2));
console.log(myArray.indexOf(3)); // if dosent exist it gives -1

const newArray2 = myArray.join() // convert array to string

console.log(newArray2);

console.log(typeof newArray2);

// slice , splice differnce

console.log("A",myArray);

const myn1 = myArray.slice(1,3); // print 1 or 2 elements
console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3); // it prints last range also
console.log("C",myArray); // array hi change hogaya
console.log(myn2);
