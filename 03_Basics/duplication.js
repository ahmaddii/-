let array = [2,2,3,3,4,4,5];

let n = array.length;

console.log('Duplicates are');

for(let i=0; i<n; i++)
{
    isDuplicate = false;
   
    for(let j=0; j<i; j++)
    {
        if(array[i] === array[j])
        {
            isDuplicate = true;
            break;
        }
    }

    if(isDuplicate)
    {
        console.log(array[i]);
        
    }
}
