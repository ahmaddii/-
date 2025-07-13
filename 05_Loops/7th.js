const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumbers.map( (num) => num + 10 ); // Scope open krna ha to return likhna with braces

const newNums  = myNumbers
.map( (num) => num * 10) //Ab ye wali values ai gi ye ab second mein pass hongi is ko chaining bolte hain
.map( (num) => num + 1)
.filter( (num) => num >= 40 )

//  Chaining iss mein ap multiple process pe kam krte ho

console.log(newNums);
