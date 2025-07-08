let a = 20; // Global Scope

if(true)
{
    let a = 10;
    console.log("Inner Scope Block",a);
    
}

console.log("Global Scope :",a);


