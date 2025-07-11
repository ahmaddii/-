// While

let index = 0;

while (index <= 10) {
       
    console.log(`Value of Index is ${index}`);
    index = index + 2;
    
}

let myArray = ['Flash','Batman','Aquaman']

let arr = 0;

while (arr < myArray.length) {

    console.log(myArray[arr]);
    
    arr = arr + 1;
    
}

let score = 11;

do {
    console.log(`Score is ${score}`); 
    score++; // ye pehle hoga
} 
// condition bad mein check hoi 
while (score <= 10);