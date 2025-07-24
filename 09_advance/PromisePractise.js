const firstPromise =  new Promise(function(resolve,reject){
    
    setTimeout(function(){
        console.log('1st Async Task complete');
        resolve();
    },1000)


})

firstPromise.then(function(){
    console.log('Promise Consumed Hogaya');
    
})

const pizzaOrder = new Promise(function(resolve,reject){
    setTimeout(function(){
        
        const ovenWorking = false;

        if(ovenWorking)
        {
            resolve('Pizza Ready Ha');
        }
        else{
            reject('Error While Preparing Pizza')
        }
        
     // resolve('Your Pizza is Ready !') // Pizza ya order ready to ha lakin user jis ne order kiya us ko pta hi ni ha
    },1000)
})

// So cosume use kare ge take user ko pta chal sake

pizzaOrder.then(function(Pizza){
    console.log(Pizza);
    
}).catch(function(error){
    console.log(error); 
})

//The promise prepares the pizza 🍕 in 2 seconds (setTimeout)

//When it’s done, it notifies the user via resolve('Pizza Ready')

//.then() receives that notification and logs it ✅


new Promise(function(resolve,reject){

    setTimeout(function(){

        resolve({userName:'Ahmad',Email:'malik@gmail.com'})

    },1000)
})
.then(function(user){
   console.log(user);
   
})

const promiseFour = new Promise(function(resolve,reject){
    
    setTimeout(function(){

        let error = false;

        if(!error)
        {
            resolve({Name:'Ali', Phone: '03042124124'});
        }
        else{
            reject('Error Occured');
        }
    },1000)
})

promiseFour.then(function(user){

    console.log(user);
    return user.Name;

}).then(function(Name){
   console.log(Name);
   
}).catch(function(error){
console.log(error);

}).finally(function(){
    console.log('Promissed Fullfileed');
    
})

const promiseFive = new Promise(function(resolve,reject){


    setTimeout(function(){
       
     let error = true;

     if(!error)
     {
        resolve({Language:'Js',Password:'1234'})
     }
     else{
        reject('Js Went Wrong')
     }

    },1000)

})

async function consumedPromiseFive() {
    
   try {

  const response = await promiseFive;
   console.log(response);
    
   } catch (error) {
          
        console.log(error);     
   }
   
}

consumedPromiseFive()


async function getAllUser() {

  try {

  const response =  await fetch('https://api.github.com/users/john');

  const data = await response.json();

  console.log(data);
  
    
    
  } catch (error) {

    console.log(error);
    
  }


}

getAllUser();

// similar for fetch

fetch('https://api.github.com/users/john')
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data);

})
.catch(function(error){
    console.log(error);
    
})
.finally(function(){
    console.log('Promse Fullfilled');
    
})
