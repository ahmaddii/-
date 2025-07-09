// Immediadtly Invoked Function Expression (IIFE)
(function chai()
{
    console.log("DB Connected");
    
})();

(function aurcode() 
{   // Named IIFE
    console.log("DB Conected two");
   
})(); // SEMI colon se erro ai ga

// 2 IIFE Keliye semi colon lagan hoga

( (name) => {  //IIFE WITH Arrow Function
    console.log(`DB CONNECTED TWO ${name} `);
   
})('Ahmad'); // Arrow function ke sath IIFE


// Syntax: ()();

// Gl obal Scope ki Pollution jo ha varialbes ki us ko hatane ke liye use kiya