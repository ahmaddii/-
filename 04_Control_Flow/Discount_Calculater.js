let totalAmount = prompt('Enter the Total Amount');


if(totalAmount > 1000)
{
     totalAmount -= 20/100;
     alert(`Total Amount with Discount is :${totalAmount}`)
}
else if(totalAmount > 500)
{
    totalAmount -= 10/100;
    alert(`Total Amount with Discount is ${totalAmount}`)
}
else {
    alert('No Discount');
    
}