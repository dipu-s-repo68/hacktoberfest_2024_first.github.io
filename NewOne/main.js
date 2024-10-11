// login.html
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Invalid email format. Please use a valid email address.");
      window.location.href = '404.html';
    } else if (!password) {
      window.location.href = '404.html';
    } else {
      // You can add your login logic here
      // For now, it will just redirect to the 404.html page
      window.location.href = '404.html';
    }
  });
  
  // reg.html
  document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (!name || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Invalid email format. Please use a valid email address.");
      window.location.href = '404.html';
    } else if (!password || !confirmPassword) {
      window.location.href = '404.html';
    } else if (password !== confirmPassword) {
      window.location.href = '404.html';
    } else {
      // You can add your register logic here
      // For now, it will just redirect to the 404.html page
      window.location.href = '404.html';
    }
  });