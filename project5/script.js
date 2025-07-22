
   let stoper; // Global Scope Id Access..

   const randomColor = function()
   {
    const hex = '1234586789ABCDEF';
    let color = '#';

    for (let i = 0; i< 6; i++) {
        
        color += hex[Math.floor(Math.random() * 16)]

    }

    return color;

   };

   const startChangingColor = function(){

    
   const backgroundColor =  function(){
        document.body.style.backgroundColor = randomColor();
    }

   stoper =  setInterval(backgroundColor,1000);
   

   }

   const stopChangingColor = function(){
    
    clearInterval(stoper);
    stoper = null; // Thora sa code refactor kiya 


   }


   document.querySelector('#Start').addEventListener('click',startChangingColor)



   document.querySelector('#Stop').addEventListener('click',stopChangingColor)
