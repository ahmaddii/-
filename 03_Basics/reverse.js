
let array = [1,2,3,4,5];

let n = 5;

let Start = 0;
let End  = n - 1;

while(Start < End)

    {
        let temp = array[Start];
        array[Start] = array[End];
        array[End] = temp;

        Start++;
        End--;
    }

    console.log(array);
    

   console.log(array.reverse()); // Built in Method