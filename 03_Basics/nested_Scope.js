function one() // Parent Function
{
    const MyName = "Ahmad";

    function two() // Child Function : is ka Scope Parent Function ko access krskta ha
    {
        const Age = 25;
        console.log(`My Name is ${MyName}`);
        console.log(`My Age is ${Age}`);
           
    }

    two(); // is ko outide ni call krkte hain kunke is ka parent function one ha

    
}
one(); // ye parent ha is liye bahir call kiya


if(true) // parent scope
{
    const MyEmail = "malik@gmail.com";
    if(MyEmail === "malik@gmail.com")
    {   
        const MyPhone = "03047058585"; // child scope
        console.log(`My Email is ${MyEmail} and My Phone is ${MyPhone}`);
        
        
        
    }
  //  console.log(MyPhone); // outside the scope error dega
    
}


// ^^^^ Interesting Hoisting Execution Context ^^ Ka Funda

addOne(19);

function addOne(num)
{
    return num + 1;
}

addTwo(29); // Declartion se pehle access kr rhe hain iss ko hoisting context execution kehte hain jis mein ap vairable mein store function ko declration se pehle access krna chate hain

const addTwo = function(num)
{
    return num + 2;
}


