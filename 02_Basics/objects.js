// singleton : when we declear in literals singleton dosent formed

const { jsxs } = require("react/jsx-runtime");

// Object Literals

//Object.create

const mySym = Symbol("Key1");

const JsUser = {
    name: "Malik Ahmad",
    "full name": "ahmad rasheed",
    [mySym]: "mykey1", // use square bracket in key as it gives value lakin jb type is ki check karo ge to wo string hogi lakin hamian to symbol chaye so islye ye use krna []
    age: 14,
    location: "Mianwali",
    email:"malik@gmail.com",
    islogged: false,
    LastLoginDays: ["Monday","Tuesday"],
};

console.log(JsUser.email); // 1st method to access object
console.log(JsUser["email"]);  // 2nd method to access object

console.log(JsUser["full name"]);

console.log(typeof JsUser[mySym]);

JsUser.email = "ali@gmail.com";
//Object.freeze(JsUser); // it just freeze the object so that changes wont work

JsUser.email = "hassan@gmail.com";

console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello js user");
    
}
console.log(JsUser.greeting());

JsUser.greeting2 = function()
{
    console.log(`Hello Js User,${this.name}`);
    
}
