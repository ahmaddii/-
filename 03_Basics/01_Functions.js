
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


