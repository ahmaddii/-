function multipleBy5(num)
{
    return num*5;
}

//multipleBy5(5);

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// array , function , string = object = nulll

function createUser(userName , score)
{
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function()
{
    this.score++; // jis ne bhi bulaya ha sb ko increment krdo
}

createUser.prototype.printMe = function()
{
    console.log(`Score is :${this.score}`);
    
}

const chai = new createUser('Ahmad',35); //By using new ab us ko pta hoga kya read krana
const tea = new createUser('Ali',44); // without new cannot read properties error ajaye ga

chai.printMe();
