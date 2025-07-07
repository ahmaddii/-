
function sayMyName() {

console.log("H");
console.log("H");
console.log("H");
console.log("H");
console.log("H");
console.log("H");

}

sayMyName();// function call horha ha 

//function add(number1 , number2) // function defination parameters
//{
  //     console.log( number1 + number2);
//}

function add(number1 , number2) // function defination parameters
{
       return number1 + number2; // return se ap kisi variable mein store kr skte hain
}

let result = add(1,3); // function arguments

console.log(result);


function loginUserMessage(userName = "Sam") // we can also pass our default value in parameter
{
    if(userName === undefined) // true ! userName
    {
       console.log("Please Enter your Name");
       return; // is block mein agiya to iss ke bad kuch ni hoga return hojye ga
       
    }

    return `${userName} Just Logged In`;
}

  console.log(loginUserMessage());

  // print krwane keliye variable mein store kiya

//let user =  loginUserMessage(" ") jb kuch bhi pass ni krte to = undefined ata ha

function calculateCarPrice(val1 , val2,...num1) // ... ko rest operater bhi bolte hain or spread bhi based on use case
{
    return num1;   // ... mujhe bundle de rha ha sub prices ka in array
}

console.log(calculateCarPrice(200, 300 , 500,600)); // pehle or dosri val1 or val2 le gaya or baki jo ha wo rest bundle le gaya


// Object ko kis tarah pass krte hain in function

const User = {
    userName: "AHMAD",
    age: 21
};

function handleObject(anyobject)
{
   console.log(`User Name is ${anyobject.userName} and age is ${anyobject.age}`);
   
}

handleObject(User);

const MynewArray = [200,300,400]

function returnSecondValue(getArray)
{
   return getArray[1];
}

console.log(returnSecondValue(MynewArray));
