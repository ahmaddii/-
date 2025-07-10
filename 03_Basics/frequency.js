let array = [1,2,2,3,4,5,2,7];

let Target = 2;

let count = 0;

for(let i = 0; i < array.length; i++)
{
    if(array[i] === Target)
    {
        count++;
    }

    if(!Target)
    {
        console.log("Target Not Found");
        break;
    }

}

console.log(`Target ${Target} Found ${count} Times`);
