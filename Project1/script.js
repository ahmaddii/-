 const buttons = document.querySelectorAll('.button');
 
 const body = document.querySelector('body');

 buttons.forEach( (button) => {
   // Applying Event Listeners
   button.addEventListener('click', (e) => {

   switch(e.target.id)
   {
     case 'grey':
        body.style.backgroundColor = 'grey';
        break;

    case 'white':
        body.style.backgroundColor = 'white';
        break;

    case 'red':
        body.style.backgroundColor = 'red';
        break;

    case 'green':
        body.style.backgroundColor = 'green';
        break;

    case 'purple':
        body.style.backgroundColor = 'purple';
        break;

    default:
        alert('There is No Such Color');
        break;
   }
   
   //if(e.target.id === 'grey')
   //{
    //body.style.backgroundColor = 'grey'; // e.target.id = wo bhi grey hi dega
  // }
   
  // if(e.target.id === 'white')
   //{
    //body.style.backgroundColor = 'white';
  // }
   
   //if(e.target.id === 'red')
  // {
   // body.style.backgroundColor = 'red';
   //}
   
   //if(e.target.id === 'green')
  // {
   // body.style.backgroundColor = 'green';
   //}
  // if(e.target.id === 'purple')
   //{
   // body.style.backgroundColor = e.target.id;
   
   
   });
 });