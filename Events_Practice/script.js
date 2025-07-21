
document.getElementById('japan').addEventListener('click',function() {
    console.log('Owl Clicked');
},true) // Propagation ya bubbling

document.getElementById('images').addEventListener('click',function(){
    console.log('Outside Url Clicked');    
},true)

document.getElementById('photoshop').addEventListener('click',(e) => {
        console.log(e);     
},false)

document.getElementById('images').addEventListener('click',function(e){
   
    if(e.target.tagName === 'IMG')
    {
    
    console.log(e.target.id);
    
    let removeIt = e.target.parentNode;
    removeIt.remove();
    }
   
},false)

document.getElementById('Click').addEventListener('click',function(){
      alert('Clicked')
},false)

document.getElementById('button2').addEventListener('click',function()
{
  const changer = document.querySelector('body');
  changer.style.backgroundColor = 'green'
},false)


const box = document.getElementById('box');

box.addEventListener('mouseover',function()
{
    box.style.backgroundColor = 'green';
},false)

box.addEventListener('mouseout',function()
{
   box.style.backgroundColor = 'red'
},false)

box.addEventListener('mouseover',() => {
    console.log('User Hover it');
    
},false)

document.getElementById('input').addEventListener('keydown',function(e)
{
    console.log(`Key Pressed ${e.key}`);
    
},)

document.getElementById('input').addEventListener('keyup',function(e)
{
   console.log(`key Up ${e.key}`);
   
},false)

document.addEventListener('keydown',function(e)
{
   if(e.key === 'Enter')
   {
    alert('Enter Pressed')
   }
},false)

document.getElementById('fruits').addEventListener('change',function(e)
{
   alert('Your Selected' + e.target.value)
},false);


document.getElementById('City').addEventListener('change',function(e){
      console.log(`You Select ${e.target.value} City`);
      
},false)



document.getElementById('loginForm').addEventListener('submit',function(e){
    e.preventDefault(); // page reload hoga
    
  const user =  document.getElementById('userName').value
 
  alert(`Form Submitted with name ${user}`)

},false)


document.getElementById('ptag').addEventListener('dblclick',function() {

    this.style.color = 'red';

},false)

document.getElementById('ptag').addEventListener('dblclick',function()
{
    this.style.fontSize = '20px'
})

document.getElementById('box2').addEventListener('contextmenu',function(e){
   e.preventDefault();
   alert('Right Clicked Disable')
},false)