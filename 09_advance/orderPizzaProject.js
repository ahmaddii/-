
// Promises Pizza Simulation Project

function orderPizza(flavor)
{
    return new Promise(function(resolve,reject){
     
        setTimeout(function(){
             
            const isOvenWorking = Math.random() > 0.2 // 80 chances hain ke success ho

            if(isOvenWorking)
            {
                resolve(`Your ${flavor} Pizza is Ready`);
            }
            else{
                reject('Sorry we are Closed');
            }


        },4000)

    })
}

orderPizza('Fajita')
.then(function(successMsg){

   console.log(successMsg);
   
})
.catch(function(error){
console.log(error);

})
.finally(function(){
    console.log('Order Process');
    
})