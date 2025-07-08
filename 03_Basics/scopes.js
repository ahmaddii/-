//var c = 300; 
  
// Bahir Wale ye c Global Scope ha
// Global scope mein hum kisi jaga access krskte hain 
  
let a = 100;

  if(true)
    {
      let a = 10; // block scope
      const b = 20; // block scope
      var c = 30;
      console.log("INNER:",a); // prints 10 as it is in block scope
      
    }

   // globe scope console wale or node different ha 

// Ye Braces mein jo ha wo blocked scope ha 
// Blocked Scope mein ni krskte

//console.log(a);
//console.log(b);
console.log(c);
console.log(a); // print 100 as it is in Global Scope
