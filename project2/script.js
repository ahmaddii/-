const form = document.querySelector('form');
// Bahir likho ge to khali empty value de ga

form.addEventListener('submit', (e) => {
    e.preventDefault()

  const height =  parseInt(document.querySelector('#Height').value)  
  
  const weight =  parseInt(document.querySelector('#weight').value)  
   
  const result =  document.querySelector('#results') 


  if(height === '' || height < 0 || isNaN(height))
  {
     result.innerHTML = `Please Give a Valid Height ${height}`;

  }
  
  else if(weight === '' || weight < 0 || isNaN(weight))
  {
    result.innerHTML = `Please give a Valid Weight ${weight}`;
  }

  else {
   const BMI =  (weight / ((height *  height) /10000)).toFixed(2)

   // show the result 

   result.innerHTML = `<span>${BMI}</span>`
   
    if(result < 18.6)
  {
    alert('Under Weight')
  }

  else if(result > 24.9 )

  {
    alert('Overweight')
  }

  else {
    alert('Normal Weight')
  }


  }

 

})