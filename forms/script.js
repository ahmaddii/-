document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate email
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email.');
      return;
    }

    // Validate password
    if (!password || password.length < 6) {
      alert('Please enter more than 6 characters in password.');
      return;
    }

    alert('Login Successful!');
  });
});
