const User = {
    
    name: "Ahmad",
    Price: 999,
    
    WelcomeMessage: function()
        {
            console.log(`${this.name} , Welcome to Website`);
            console.log(this); // Current Context jo values ha us ko refer krta ha
            
            
        }
        // This Current Context ko Refer KRTA HA
}

//User.WelcomeMessage();
//User.name = "Ali";
//User.WelcomeMessage();

console.log(this); // Global Context ko Refer krta ha in node empty hota ha 


// Browser mein this ko Window as a Global Refer krta ha 


function one()
{   
    let userName = "Ahmad";
    console.log(this.userName);
    
}

one();

const chai = () => // Arrow Function
{
    let userName = "Ali";
    console.log(this.userName); // Undefined hi dega
    
}

chai();


const addTwo = (num1 , num2) => {
   return num1 + num2;
} // Curlye Braces ke Sath Explicit Return Likhna Prta ha 

const addonewo = (num1 , num2) => num1 + num2; // Implicit Return Matalb Mein Man Leta hoon

const sub = (num1 , num2) => (num1 - num2); // Implicit Return jahna braces na hon waha ni likhte

console.log(addTwo(10 , 20));

const mul = (num1 , num2) => ({userName: "Ahmad"}); // Implicit mein Jb object return krna to curly braces inside lagan hoga

console.log(mul(10,30));


//const MyArray = [2,3,4,6];

//MyArray.forEach(() => {})
