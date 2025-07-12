const coding = ['js','ruby','java','python','cpp','python'];

coding.forEach(function (value) {
    console.log(value);
    
} )
// For Arrow Function
coding.forEach( (value) => {
    console.log(value);
    
} )

// For each loop mein call back function ka name nhi likhte 
// jo parameter pass kiya ha call back function mein wo har bar value lega from array

function printMe(item) 
{
    console.log(item);
}

coding.forEach(printMe) // Function Defind ke bad pass kiya


// We can Also print the item , index or full array using for each loop
coding.forEach( (item , index , arr) => {
    console.log(item , index ,arr);
    
} )

const myCoding = [
    {
        languageName: 'Js',
        LanguageFuke: 'Javascript'
    },
    {
        languageName: 'Ja',
        LanguageFuke: 'Java'
    },
    {
        languageName: 'py',
        LanguageFuke: 'Python'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.LanguageFuke);
    
    
    
})