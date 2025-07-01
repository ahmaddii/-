// Dates

//let myDate = new Date();

//console.log(myDate.toString()); // give full date and time
//console.log(myDate.toDateString()); // give date only
//console.log(myDate.toLocaleString()); // give / date and time
//console.log(myDate.toLocaleDateString()); // give only / date
//console.log(typeof myDate);


//let myCreatedDate = new Date("01-13-2023");

//console.log(myCreatedDate.toDateString());


//let myTimeStamp = Date.now();
//console.log(myTimeStamp);

//console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));


//let newDate = new Date();
//console.log(newDate);
//console.log(newDate.getMonth() + 1);
//console.log(newDate.getDay());

//`${newDate.getDate() and the Time is ${newDate.getTime()}}`
//newDate.toLocaleString('default',{
  //  weekday: "long",
//});

let myDate = new Date();

console.log(myDate.getMonth()); // gives you a month
console.log(myDate.getFullYear()); // gives you a full year

console.log(myDate.toString()); // gives everthing of date

console.log(myDate.toDateString());

console.log(myDate.toLocaleString()); 

console.log(myDate.toLocaleDateString());

console.log(typeof myDate); // obj

const newDate = new Date('2025,01,12')

console.log(newDate.toDateString());

console.log(newDate.toLocaleDateString()); // PKS

let timeStamp = Date.now();
console.log(timeStamp);

console.log(newDate.getTime());

console.log(Math.floor(Date.now()/1000));

const newDate2 = new Date();

console.log(newDate2);

console.log(newDate2.getMonth() + 1);

console.log(newDate2.getDay() - 1 );

console.log(newDate.getFullYear());


console.log(`Today the date is ${newDate.getDate().toString()} and the time is ${newDate.getTime()}`);






