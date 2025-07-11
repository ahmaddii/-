// Basic Ternay Operater Usage
let age = 20 ;

let result = age>=18 ? console.log('You are Adult') : console.log("You are Minor");

// Inline Usage

let LoggedIn = false;

console.log(LoggedIn ? 'Welcome Back' : 'Plz Log In');


// Check grades using ternay operater
// Nested Ternay Operater

let Marks = 85;

let result3 = Marks >= 90 ? 'A Grade' 

             : Marks >=80 ? 'B Grade'

             : Marks >= 70 ? 'C Grade' 

             : 'C';

            console.log(`Result is :${result3}`);


// Voting Eligibilty Checker

let agee = 16;

let isVote = (agee >= 18) ? 'You can Vote':'You Cant Vote';

console.log(isVote);

// Login Message

let User = "Ahmad";

let Message = User ? `Welcome ${User}` : 'Plz enter your name';
console.log(Message);

