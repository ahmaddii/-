const user = {
    userName: 'Ahmad',
    loginCout: 8,
    SignedIn: true,
    getUserDetails: function()
    {
         //console.log('Got User Details');    
         console.log(`UserName: ${this.userName}`); // Current context ko dekh srahe hain
         console.log(this);// this ko pta ha current context konsa lena
         
    }

} //Object Literals kya ha 

console.log(user.userName);
console.log(user.getUserDetails());

console.log(this);

//const promiseOne = new Promise(); // new naya context bnata ha iss ko hum constructer function bolte hain

const date = new Date()

function User(userName ,LoginCount ,isLoggedIn )
{
   this.userName = userName;
   this.LoginCount = LoginCount
   this.isLoggedIn = isLoggedIn;

   this.greeting = function()
   {
    console.log(`Welcome ${this.userName}`);
    
   }

   return this; // Implicily by default return hota ha 
}

const UserOne = new User('Ahmad', 12, true ); // new Apni apni copy yani instance de deta ha 
const UserTwo = new User('Hassan',40,false); // Values Override horhe hain
console.log(UserOne);
console.log(UserTwo);

// new jese likhe ge empty parenthiese object bne ga 