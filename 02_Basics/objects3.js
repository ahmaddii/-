//const tinderUser = new Object() Sinleton Object

const tinderUser = {}; // non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false

//console.log(tinderUser);

const regularUser ={
    email: "ali@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ali",
            LastName:"Khan"
        } 
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {4: "a", 5: "b"}

//const obj3 = {obj1 , obj2}  ye object ke ander object bnae ga jo hamain nhi chaye

//const obj3 = Object.assign({}, obj1 , obj2, obj3) // ye combine kare ga objects ko

// {} it means object assign which just return a target object with our source which are obj1 or obj2


//const obj3 = {...obj1,...obj2,...obj3}; // spread method

//console.log(obj3);

const users = {
    id: 1,
    email: "malik@gmail.com",
}

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // if you want only keys from the object
console.log(Object.values(tinderUser)); // if you want only values from the objects
console.log(Object.entries(tinderUser)); // use different array for every key value
console.log(tinderUser.hasOwnProperty('isLoggedIn') ); // check wheather this value present or not






