const clock = document.getElementById('clock');

//let date = new Date(); // date object hamian current date or time deta ha

//alert(date.toLocaleTimeString()); // Ye hamain human readable time dega

// set Inerval hota ha jo ke fucntion ko run krta ha jo time apne diya hoga 

setInterval(() => {
    let date = new Date();
    clock.innerHTML = ` Time :${date.toLocaleTimeString()} and Date ${date.toLocaleDateString()} `;
} ,1000) // har 1 sec bad  ye function ki script chalye ga