// Jab hum literals mein object bnae ge to singleton nhi bane ga
//  Jab hum constructer se bnaye object to singleton bane ga

let newSym = Symbol("key1"); // declare as a symbol 

let User1 = {
    Name:"Ali",
    age: 25,
    "full name": "ali khan",
    [newSym]: "mykey1", // use symbol as a key
    address: "Islamabad",
    location:"I8/3 Islamabad",
    email:"ali@gmail.com",
    phone: "0304863343",
    isLoggedIn: true,
    LastLogin: ["Monday","Friday"],
};

console.log(User1.Name);
console.log(User1["Name"]);

console.log(User1["LastLogin"]);

console.log(User1["full name"]);

console.log(typeof User1[newSym]); // we symbol as a key in our object so its importent for interview perspective using [] for inside object

console.log(User1);

User1.email = "khan@gmail.com";

console.log(User1.email);

User1.greeting = function()
{
    console.log("Hello from js");
    
}

console.log(User1.greeting());


User1.greeting2 = function()
{
    console.log(`Hello this js and my name is ${this.Name}`);
    
}

Object.freeze(User1)




