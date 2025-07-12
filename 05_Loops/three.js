// for of

// ["","",""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const element of arr) {

    console.log(element);
       
}

const greetings = "Hello World";

for (const greet of greetings) {
    
    console.log(`Each char is ${greet}`);
    
}

// Maps 
// Maps mein order ka khyal rkhta ha object mein nhi hota
// basically ye object ha key value pair
// Unique values ai gi iss ka khayal rkhta hain

// Maps Iterable hain

const map = new Map();
map.set('In', 'Ind')
map.set('USD','usa')
map.set('Pkr','pakistan')

console.log(map);


for (const [key,value] of map) { // Yaha pe sirf key likhte to sara array de deta so hum ne array destructure kiya ha
    
    console.log(key, ':-' ,value);
    
}

const myObject = {
    'Game1': 'IGI',
    'Game2':'Call of Duty'
}
// Object ko Iterate krne ke dosre tricks hote hain
for (const key of myObject) {
    
    console.log(key);
    
}