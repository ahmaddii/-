// This in Regular Function Refers to Current Context Object which We have to call

const User = {
    name: "Ali",
    Greet: function () {
         
        console.log(`${this.name} , Welcome to Website`);;
        
    }
}

// In Regular Function Object is Calling the Function

User.Greet();


const User2 = {
    Name: "Ahmad",
    Greet: () =>
    {
            console.log("Hello" + this.Name);
            
    }
}

User2.Greet() // It Gives Undefined beacuse in arrow function they use this from outside function parent scope or object like windows


const User3 = {
    NAME: "Ahsan",
    regular: function()
    {
        console.log("Regular" + this.NAME); // Regular Function
        
    },

    arrow: () =>
    {
        console.log("Arrow" + this.NAME); //Arrow Function;
        
    }
  
}

User3.regular();
User3.arrow(); // Undefined beacuse refer to parent scope or window object


const addTwo = (num1 , num2) => {
    return num1 + num2;
} // Explicit Return

const addThree = (num1 , num2 ,num3) => (num1+num2+num3); // Implicit Return ha Braces ke beghair Arrow Function Return Kr rha ha 

const add2 = (num1 , num2) => ({userName: "Ahmad"}); // Object Return used inside braces in arrow function

console.log(add2(3,3));
