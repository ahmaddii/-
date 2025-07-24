    function orderPizza(flavor) {
      return new Promise(function (resolve, reject) {
        document.getElementById('status').textContent = `⏳ Preparing your ${flavor} pizza...`;
        document.getElementById('loader').style.display = 'block';

        setTimeout(function () {
          const isOvenWorking = Math.random() > 0.2;

          if (isOvenWorking) {
            resolve(`✅ Your ${flavor} Pizza is Ready! Enjoy!`);
          } else {
            reject('❌ Error while preparing your order...');
          }
        }, 4000);
      });
    }

    function placeOrder() {

      const flavor = 'Fajita';
      const button = document.getElementById('orderBtn');
      const loader = document.getElementById('loader');
      const status = document.getElementById('status');

      button.disabled = true; // Button disable kiya for 8 secs
      button.textContent = 'Ordering...';
      status.textContent = '';
      loader.style.display = 'block';

      orderPizza(flavor)
        .then(function (successMsg) {
          status.textContent = successMsg;
        })
        .catch(function (errorMsg) {
          status.textContent = errorMsg;
        })
        .finally(function () {
          loader.style.display = 'none'; // loader khatam hogaya after promise completion
          button.disabled = false; // button enable krdiya
          button.textContent = 'Order Pizza';
          console.log('Order Process Completed!');
        });
    }
    
    document.getElementById('orderBtn').addEventListener('click',function(){
        placeOrder();
    })