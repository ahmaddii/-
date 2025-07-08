
// Closue : In which we have nested Function in which inner function can access the outside function variables
// e.g child parent ko access krskta ha

function one()
{
    const userName = "Ahmad";

    function two()
    {
        const Website = "Youtube";
        console.log(userName);
        
    }

   //console.log(Website);

    two();
    
}

one();


if(true)
{
    const userName = "Ali";

    if(userName === "Ali")
    {
        const Website = "FaceBook";
        console.log(userName + Website);
        
    }

  //  console.log(Website);
    
}

//console.log(userName);


//^^^^^^^^^ Interesting  ^^^^^^^^^

addOne(10);

function addOne(num)
{
    return num + 1;
}



addTwo(20);

const addTwo = function(num) // Housiting Excution context bnta ha jis mein ap function declaration se pehle access ni krskte hain jb variable mein hold karain ge functions ko
{
    return num + 2;
}
