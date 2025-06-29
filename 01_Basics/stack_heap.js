/*

1: heap memory directly reference heap memory so if value change than its entire memory value change beacasue directly refreing to heap memory
2: stack memory basically copy bn rhi ha original value ki copy bnti ha or wo save hoti ha isliye jb ap new varialbe krai gain to kya hoga orignal value remain same lakin jo copy hogi wo change hojai ge

*/

// stack apply on primitive data types

let email = "malikahmad@gmail.com"

let anotherEmail = email;


anotherEmail = "ali@gmail.com"
console.log(email);
console.log(anotherEmail);

// heap memory apply on non primitive apply hoti ha

let newObj = {
    email: "ahmad@gmail.com",
    id: 123424,
};

console.log(newObj);

let anotherobj = newObj;

anotherobj.email = "ayeza@gamil.com";

console.log(newObj);
console.log(anotherobj);








