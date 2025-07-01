//const score = 400; // simple define

//console.log(400);


//const balance = new Number(100); // explicit define

//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2)); // to display how much decimal number

//const otherNumber = 23.75543;

//console.log(otherNumber.toPrecision(2)); // it basically round after decimal up to 2 preciosion


//console.log(typeof balance);

//const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-In'));

// _______ Maths _______

//console.log(Math);

//console.log(Math.abs(-4)); // absoulte math function convert negative number into positive

//console.log(Math.round(4.6));
//console.log(Math.ceil(4,2)); // uper wali value le ga

//console.log(Math.floor(4,7));

//console.log(Math.sqrt(5));

//console.log(Math.min(4,322,2,1)); // find min value

//console.log(Math.max(22,34,12)); // find max value 

//console.log(Math.random());
//console.log((Math.random()*10) + 1);
//console.log((Math.random()*10) + 1);

//const min = 10;
//const max = 20;

//console.log(Math.floor(Math.random() *(max - min + 1) + min));

// number operations

const number = 400

console.log(number);

const balance = new Number(500); //explicit define

console.log(balance);

console.log(typeof balance); // object

console.log(balance.toString()); // covert number to string

const paisa = 10000000;

console.log(paisa.toLocaleString('en-IN'));

console.log(paisa.toFixed(4)); // after decimal apko kitne number 

const number2 = 14.56789;

console.log(number2.toPrecision(2)); // preicis number when Eqaul to left side then it gives round off other wise exponential

// maths operations


console.log(Math);

console.log(Math.PI);

console.log(Math.abs(-3));

console.log(Math.round(3,4));

console.log(Math.ceil(3,4));

console.log(Math.floor(4,3));

console.log(Math.sqrt(3));

console.log(Math.min(22,344,11));

console.log(Math.max(44,22,11));

console.log(Math.random()); // 0 to 1 gives number

console.log(Math.random()*10 + 1); // 0 *10 and 1 * 10 and then add + 1 to get range between 1 and 11 not starts from zero
console.log(Math.random()*10 + 1);

const min = 10;

const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)+ min));

/*
   max - min = 20 -10 = 10;
   now 0*10 and 1*10 = [0,10] now the values between 10 and 20 is 11 but we type 0,10 so thats why we add 1 to avoid result output between 10 numbers  
   [0,11]
   
   to get desired result we plus min value 

   [0 + 10 = 10 , 11+ 10 = 21] = [10,21] now we get value from 10 to 21 range 

   what floor funcation is doing to covert round about floar value into lowest posisible integer value

*/