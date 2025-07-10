let array = [1,2,3,4,5,6];
let n = array.length;

console.log('Even Numbers are');
   
   for(let i=0; i<n; i++)
   {
    if(array[i] % 2 == 0)
    {
        console.log(`Even Elements are : ${array[i]}`);
        
    }
   }

console.log('Odd Number are:');

 for(let i=0; i<n; i++)
 {
    if(array[i] % 2 != 0 )
    {
        console.log(`Odd Numbers are : ${array[i]}`);
        
    }
 }
   