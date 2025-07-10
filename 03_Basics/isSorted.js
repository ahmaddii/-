
function isSorted(array, n)
{
   for(let i=0; i<n; i++)
   {
    if(array[i] < array[i-1])
    {
        return false;
    }
   }

      return true;
}

array = [1,2,3,4,5];
let n = array.length;

if(isSorted(array,n))
{
    console.log('Array is Sorted:');
    
}
else {
    console.log('Array is Not Sorted:');
    
}