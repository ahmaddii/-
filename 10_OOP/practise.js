// Object Litreal

const user = {

    userName: 'Ahmad',
    isloggedIn: true,
    email: 'ahmad@gmail.com',

    getUserDetails: function()
    {
        console.log(`UserName is :${this.userName}`); 
        console.log(this);       
    }


}

console.log(user.getUserDetails());


console.log(this);

const date = new Date(); // new hi hamra constructer ha ye new instance yani new object bnata ha baje iss ke ke current values ko hi override krde

//const promise = new Promise();


// Creating a new Constructer function

function User(Name , email , Id)
{
   this.Name = Name;
   this.email = email;
   this.Id = Id;

   this.greeting = function greeting()
   {
    console.log(`UserName: ${this.Name}`);
    
   }
}

// now creating instacnes of multiple users

const user1 = new User('Ahmad','ha@ga',1)
console.log(user1);

const user2 = new User('Hassan','chai@gmail',2);
console.log(user2);


// So new does 4 things create new instance copy of current object then
// by refering this it refer to current functions or methods 
// with new you create multiple instance of function or 