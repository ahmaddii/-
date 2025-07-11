const isUserLogin = true;
const Temperature = 41;

// Operaters in Control Flow

// > < == === <= >= !=

if(Temperature < 50)
{
    console.log('Less than 50');   
}
else{
    console.log('Greater Than 50');
    
}

console.log('Execute');

const Score = 200;

if(Score > 100)
{   // Block Scope
    const Power = 'Fly';
    console.log(`User ${Power}`); 
}

const Balance = 1000;

//if(Balance > 500) console.log('Test') , console.log("Test2"); // Implicit Scope aik hi line mein hoga

if(Balance < 500)
{
    console.log("Less than 500");
    
} 

else if(Balance < 750)
{
    console.log("less than 750");
    
}

else if(Balance < 900)
{
    console.log("Less than 900");
    
}
else {
    console.log("Less than 1200");
    
}


const UserLoggedIn = true;
const DebitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;

// Logical Operaters

if(UserLoggedIn && DebitCard ) // AND Operater check both are true
{
    console.log("Allow To Buy Courses");
    
}



if(LoggedInFromEmail || LoggedInFromGoogle) // In this or Operater only one is true than it runs its code 
{
    console.log('User Logged in From Google');
    
}





