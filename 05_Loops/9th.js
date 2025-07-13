// Reduce Method for shopping function
const myNums = [1,2,3];

//const initialValue = 0;

 const myTotal =  myNums.reduce( (acc , currVal) => {
    console.log(`acc: ${acc} and curval : ${currVal}`);
    return acc + currVal;
 } , 0) // , ke bad accumlater ko value batani ha kaha se start krna ha 

 console.log(myTotal);
 
 const shoppingCart = [
     
    {
        itemName: 'Js Course',
        price: '2999'
    },

    {
        itemName: 'Python Course',
        price: '2999'
    },

    {
        itemName: 'Data Science',
        price: '2999'
    },

    {
        item: 'Mobile Application',
        price: '2999'
    }

 ]

const PriceToPay = shoppingCart.reduce( (acc , item) => acc + item.price , 0 )

console.log(PriceToPay);
