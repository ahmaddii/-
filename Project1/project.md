# Project 1 Color Changer

```Javacsript

 const buttons = document.querySelectorAll('.button');
 
 const body = document.querySelector('body');

 buttons.forEach( (button) => {
   // Applying Event Listeners
   button.addEventListener('click', (e) => {
   if(e.target.id === 'grey')
   {
    body.style.backgroundColor = 'grey'; // e.target.id = wo bhi grey hi dega
   }
   
   if(e.target.id === 'white')
   {
    body.style.backgroundColor = 'white';
   }
   
   if(e.target.id === 'red')
   {
    body.style.backgroundColor = 'red';
   }
   
   if(e.target.id === 'green')
   {
    body.style.backgroundColor = 'green';
   }
   if(e.target.id === 'purple')
   {
    body.style.backgroundColor = e.target.id;
   }
   }) 
 })


```