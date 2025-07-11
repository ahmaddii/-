const userEmail = "ahmad@gmail.com"

if (userEmail) {  // Yaha String ko hi man liya ha wo true ha
                    // ager email khali ho to man liya false ha 
       console.log('Got User Email');
}
else{
    console.log('Dont have User Email');
}

// Falsy Values:
// False, 0 , -0 , BigInt = 0n , "" , null ,undefined, NAN

//Truthy values
//"assa", true, [] "0" , "false" " ", {} ,function(){} empty function

if(userEmail.length === 0)
{
  
  //check array is empty or not

  console.log('Array is Empty');
  
}

const EmptyObject = {}

// Check Object is Empty or not

if(Object.keys(EmptyObject).length === 0)
{    
    console.log('Object is Empty');
    
}

// Nullish Coalescing Operater (??): null undefined


let val1;

val1 = 5 ?? 10; // 5 Dega

val1 = null ?? 10; // Yaha pe 10 dega afer database se null arha ya undefined arha to jo koi value ha wo assign kr dega

val1 = undefined ?? 15;

let val2 = null ?? 10 ?? 20;

console.log(val1);

console.log(val2);


// Ternary Operater
// Ye or Nullis collescing operater alag hain dono ka goal alag ha 

//condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("More than 80") : console.log('Less than 80');

