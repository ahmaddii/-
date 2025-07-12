// For of
// For in 
// For each

const { log } = require("electron-builder");

// For of

const arr = ['Flash','Batman','Superman'] 

for (const element of arr) {

    console.log(element);
    
    
}

const greetings = 'Hello Hurrah';

for (const greet of greetings) {
    
    console.log(`Ahmad ${greetings}`);
    
}

// Maps
// Maps are unique value pairs like objects
// In map order ka khayal rakha jata ha

//const Map = new map();

//map.set('pkr', 'Pakistan'),
//map.set('Ind', 'India')

//console.log(Map);


//for (const [key,value] of Map) {
         
  //console.log(key,value);
  

 // const myObj = {
   // 'Game1':'Call of duty',
   // 'Game2': 'IGI'
//};

//for (const key of myObj) {
    
  //  console.log(key);
    
//}

const myObj = {
    
    js :' Javascript',
    cpp : 'cpp',
    py :'Python'
};

for (const key in myObj) {
    
    console.log(`${key} stands for ${myObj[key]}`);
    
} // for in loop used to iterate objects


const myArray = ['batman' , 'flash', ' superman']

for (const key in myArray) {

    console.log(myArray);
    

}

const Languages = ['Js','Pyhton','cpp','Dart','Sql','Swift','Php'];


Languages.forEach(function (value) {
    console.log(value);
    
})

Languages.forEach( (value) => {
    console.log(value);
    
})


function printMe(value)
{
    console.log(value);
    
}
// Function pehle declare krwaya print bad mein for each loop mein le gai for iteraion
Languages.forEach(printMe)

Languages.forEach((value , index , arr) => {
    console.log(value,index,arr);
    
})

let myObjh = [

 {   
    name : 'ahmad',
    age : 15,

 },

 {
    name : 'Ali',
    age : 15,

 },

  {
    name : 'Hassan',
    age : 15,

 }

]


myObjh.forEach( (item) => {
   
    console.log(`My name is ${item.name} , and my age is ${item.age}`);
    
    
})