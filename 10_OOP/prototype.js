//let myName = 'Ahmad   ';


//console.log(myName.truelength);

let myHeros = ['Thor','SpiderMan'];

let heroPower = {
    Thor: 'Lightning',
    SpiderMan: 'sling',

    getSpiderPower: function()
    {
         console.log(`Spidy Power is ${this.SpiderMan}`);
         
    }
}

Object.prototype.ahmad = function() // Object Apko mene aik ni property ya power de di ha
{
    console.log('Ahmad is Present in all Objects');
    
}

heroPower.ahmad();

myHeros.ahmad();

Array.prototype.malik = function()
{
    console.log('Array says hello');
}

myHeros.malik();

//heroPower.malik(); // matlab sirf array ke pass power ha 
// Lakin jb object ko power denge to sb ko mil jai gi power


// Inheritence

// Sb object ko apne apne properties dedi
// Lakin sometime hamain kuch properties chaye hote hain

const user = {
    name: 'Ahmad'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user;

// Yahi Prototyple Inheritence ha 

// Lakin Hum Moderen Syntax prhe ge

Object.setPrototypeOf(TeachingSupport,Teacher) // Basically wahi __proto___ hi ha 

let anotherUserName = 'Ahmad     ';

String.prototype.trueLength = function()
{
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
       
}

anotherUserName.trueLength(); // yaha pe variable se call kiya
'Ali '.trueLength(); // Jis ne call kiya 
'IceTea '.trueLength();  // jis ne call kiya


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned. */
