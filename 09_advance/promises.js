const promiseOne = new Promise(function(resolve,reject) {
    // Do an Async Task
    // DB Calls , cryptography,networkcalls
    setTimeout(function(){
        console.log('Async Task is Complete');
        resolve(); // ab ye connect howa then se bhi 
    },1000)
}); // Promise ko create krna 

// E4 or E5 mein bluebird thi by default but after node js in ES6 it gives promises

// Promise one create howa ab us ko consume krna

promiseOne.then(function() {
    console.log('Promise Consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve();
    },1000)

}).then(function(){
    console.log('Promise 2 Consumed'); 
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve({userName: 'Ahmad',email: 'ahmad@gmail.com'}); // resolve ke ander jo bhi parameter pass karo ge consume mein mil jai ga
    },1000)
})

promiseThree.then(function(user){
 console.log(user);
 
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){

        let error = false;

        if(!error)
        {
            resolve({userName:'Ali',Password: '123'})
        }
        else{
            reject('Error Occured');
        }

    },1000)
})

promiseFour.then((user) => {
    
    console.log(user);
    return user.userName;
          
}).then((userName) => { // Chainng krte hain is tarah with then
  console.log(userName);
  
}).catch(function(error){
   console.log(error);   

}).finally(() => {
    console.log('Promised is Finally Resolved');
})


const promiseFive = new Promise(function(resolve,reject){

    setTimeout(function(){

        let error = true;

        if(!error)
        {
            resolve({userName:'Javascript',Password: '123'})
        }
        else{
            reject('Js Went Wrong');
        }

    },1000)

});

  
async function consumedPromiseFive(){

    try {

      const response =  await promiseFive;
      console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }

    // acha async await mein try catch use krna for error handling jb bhi koi request bhejni ha server per 
  
}

consumedPromiseFive();
// Promise .then or catch se karo lakin async await se krte hain
// async mein hojata ha to tab age brhta ha wrna wahi error de detaha  

async function getAllUser() {

  try {

 const response = await  fetch('https://api.github.com/users/john');

 const data = await response.json();

 console.log(data);
 
    
  } catch (error) {

    console.log('E:',error);
     
  }
    
}


fetch('https://api.github.com/users/john')
.then((response)=>{
    return response.json();
}) // ye khatam hoga to agle then chale ga

.then((data) =>{
    console.log(data);
})

.catch((error)=>{
    console.log();
})




getAllUser();

