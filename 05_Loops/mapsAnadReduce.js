const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = myNumbers.filter( (num) => num > 4)
{
    console.log(newNumbers);  
}

// Basic Filter Method

const newArra = [1, 5, 3, 7, 2];
const newItem = [];

newArra.forEach((num) => {
  if (num > 4) {
    newItem.push(num);
  }
});

console.log(newItem); // Output: [5, 7]


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


// Filter Out krke apne hissab se data fetch krwana from database

const userBooks = Books.filter( (bk) => bk.genre === 'History' && bk.Publish > 1950 );

console.log(userBooks); // Now we filter out the data according to our needs


const myArray1 = [1,2,3,4,5,6,7,8,9,10]

//const newArray = myArray1.map( (item) =>  item + 10);

//console.log(newArray);

// We can also perform chaining like in which we are using multiple processes

const newArray = myArray1
.map( (arr) => arr + 10 )
.map( (arr) => arr * 10)
.filter((arr) => arr >= 40)

console.log(newArray);

// Reduce Method Used for shopping carts

const Numbers = [1,2,3,4];

const newNumbers2 = Numbers.reduce( (accumlater , currVal) =>{
  console.log(`accu : ${accumlater} and currenVal : ${currVal}`);
  return accumlater + currVal;
} ,0 ) // Accumalater apka update everytime jb reduce hoga

console.log(newNumbers2);


const shoppingCart = [
    
    {
        CoursName: 'Javascript Mastery',
        Price: 3000
    },

    {
        CoursName: 'Javascript Mastery',
        Price: 4000
    },


    {
        CoursName: 'Javascript Mastery',
        Price: 5000
    },


     {
        CoursName: 'Javascript Mastery',
        Price: 6000
    },


]

const Total = shoppingCart.reduce( (acc , item) =>{ 
    console.log(`Accu: ${acc} , and current valu : ${item}`);
    return acc + item.Price }, 0)

console.log(Total);
