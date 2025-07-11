// For Loop

for (let i = 0; i <= 10; i++) {
    // Block Scope
    const element = i;
    
    if(element == 5)
    {
        console.log('5 is the Best Number');
        
    }
    console.log(element);

}

// Nested Loop

for(let i = 1; i<=10; i++)
{
    console.log(`Outer Loop ${i}`);
    
    for(let j=1; j<=10; j++)
    {
    console.log(`Inner Loop ${j} and Outer Loop is ${i}`);
    console.log(`${i} * ${j} = ${i*j}`);
    
    }
}

let  myarray = ['Flash', 'Batman', 'SuperMan']
console.log(myarray.length);


for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i] ;
    console.log(element);
    
    
}

// break and continue Keywords

for (let index = 1; index <= 20; index++) {
    

    if(index == 5)
    {
        console.log('Stopped');
        break;
    }


    console.log(`Value of i is ${index}`);


    
}

for (let index = 1; index <= 20; index++) {
    

    if(index == 5)
    {
        console.log('Ghalti hogai maf kr do');
        console.log(`Detected ${index}`);  
        continue
    }


    console.log(`Value of i is ${index}`);


    
}