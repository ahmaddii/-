const { retry } = require("builder-util");

const coding = ['Js', 'Ruby','Java','Python','Cpp']

//const values = coding.forEach( (item) => {
  //  console.log(item);
    //return item;
    
//} )

//console.log(values);


const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNums =  myNumbers.filter( (num) => {
    
   return num > 4
    // Age r Ap Scope open krte ho call back ka to return lagana hoga otherwise ni lagana hoga
} )  // Basic Filter Method 

console.log(newNums);

const newNum = [];

newNum.forEach( (num) => {
    if(num > 4)
    {
        newNum.push(num);  // Condition or for each loop se ap iss tarah bhi krskte hain
    }
})

// Filter Map Example

const Books = [
     
    { title: 'Book One', genre: 'History', Publish: 1957,
     edition: 1995 },

    { title: 'Book Two', genre: 'Science', Publish: 1957,
     edition: 1995 },

    { title: 'Book Three', genre: 'Fiction', Publish: 1957,
     edition: 1995 },

    { title: 'Book four', genre: 'Non Fiction', Publish: 1957,
     edition: 1995 },

    { title: 'Book five', genre: 'History', Publish: 1957,
     edition: 1995 },

    { title: 'Book six', genre: 'History', Publish: 1957,
     edition: 1995 },

    { title: 'Book seven', genre: 'History', Publish: 1957,
     edition: 1995 },

    { title: 'Book eight', genre: 'History', Publish: 1957,
     edition: 1995 },

    { title: 'Book nine', genre: 'History', Publish: 1957,
     edition: 1995 },

] 

//let userBooks = Books.filter( (bk) => bk.genre === 'History'  )

let userBooks = Books.filter( (bk)  => {return bk.Publish >= 2000 && bk.genre === 'History' })

console.log(userBooks);

