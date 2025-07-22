// Async in Js

// By default js is single thread or line by line code execute and is syncrochus by default

// But with the help of async programming we can perform non blocking codes like ke server se data fetch krna ha and read files

// Old Method : Call Back

function getData(callback)
{
    setTimeout(() =>{
        console.log('Data Recieved');
        callback();
    },2000);
}

getData(() => {
    console.log('Call Back Executed');
    
})