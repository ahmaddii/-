//const tindUser = new Object();  = singleton object dega

const { log } = require("electron-builder");

const tinderUser = {}; // ye singleton nhi ha

tinderUser.id = 12
tinderUser.name = "Ahmad"
tinderUser.email = "ahma@gmail.com"

console.log(tinderUser);

let newUser = {
    Name: "Ahma Ali",
    fullname: {
        userFullName: {
            firstName: "Ahmad",
            SecondName: "Ali"
        }

    }
}

//console.log(newUser.fullname.userFullName.firstName);

console.log(newUser.firstName);


const Obj1 = {1: "a" , 2: "b"};
const Obj2 = {3: "a", 4: "b"};
const Obj3 = {5: "a" , 6: "b"}

//const obj4 = {Obj1 , Obj2}
//console.log(obj4);

//const obj4 = Object.assign({}, Obj1 ,Obj2 , Obj3) // dosra trika combine krne ka

//console.log(obj4);

const obj4 = {...Obj1,...Obj2,...Obj3}

console.log(obj4);

const user1 = {
    id: 1,
    email: "mali@gmail.com"
}

console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));
console.log(Object.hasOwnProperty("islogged"));



