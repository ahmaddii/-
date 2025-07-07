// Functions 

function myFunction () 
{
    console.log("Ahmad is Here");
    
}

myFunction()

function Calculater(num1 , num2) // Simple Calculater Function
{
       console.log(num1 + num2);
       console.log(num1 - num2);
       console.log(num1 * num2);
       console.log(num1 / num2);
       console.log(num1 % num2);       
}

Calculater(4,4)

function isLogIn(userName)
{
    if(userName === undefined)
    {
        console.log("Plz Enter your UserName !");
        return;     
    }
    else{
        console.log(`Welcome Back ${userName}`);
        
    }
}

isLogIn('Ahmad');


function cartPrice(vala, valb,...num1)
{
    return num1; // vala ko = 200 , valb = 300 and 400 ko jo ha print krdega in array
}

console.log(cartPrice(200,300,400));


const User = {
    name : "Ali",
    age: 21
}

function UserObject (getObject)
{
    console.log(`User Name is ${getObject.name} and Age is ${getObject.age}`);
    
}

UserObject(User)


const Array = ["Banna , Apple , Grapes"]

function Arrayff(getArray)
{
    return getArray[1]
    
}

console.log(Arrayff());
