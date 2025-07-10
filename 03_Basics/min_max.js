// Finding min max value in an array

let array = [1,2,3,4,6,7];

let min = array[0];
let max = array[0];

for(let i = 0; i<array.length; i++)
{
    if(array[i] < min)
    {
        min = array[i];
    }

    if(array[i] > max)
    {
        max = array[i];
    }
}

console.log(`Minimum Value: ${min}`);
console.log(`Maximum Value: ${max}`);

