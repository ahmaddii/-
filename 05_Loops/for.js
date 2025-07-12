// For In Loop

const myObject = {
    Js: 'Javascript',
    cpp: 'c++',
    Py: 'Python',
    Rb: 'Ruby'
}

// Objects per loop kon sa lagana

for (const key in myObject) {
    console.log(`${key} for ${myObject[key]}`);
    
}

const myArray = ['JS', 'RUBY', 'PYHTON', 'CPP']

for (const key in myArray) {
    console.log(myArray[key]);
     
}