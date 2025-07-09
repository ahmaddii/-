// Execute ussi waqt IIFE 

// Gloal scope mein na ane keliye IIFE used krte hain


(function chai()
{
    console.log("DB Disconnected:");
}

)(); // ()() IIFE Ka syntax ha

(function aurCode()
{
    console.log("DB Disconnected two my Bro");
    
})();

(function(name)
{
    console.log(`DB Disconected three  ${name}`);
    
})('Ahmad');


// Bina name ka arrow function IIFE invoked with parameter
(
    (age) => {
        console.log(`My Age is ${age}`);
        
    }
)(14);

//Syntax (function(){}())  same for arrow (function() => {})