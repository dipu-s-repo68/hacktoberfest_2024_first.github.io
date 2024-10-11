document.addEventListener("DOMContentLoaded",function(){

    var body=document.body;
     setInterval(createStar,100);
     function createStar(){
       var right=Math.random()*500;
       var top=Math.random()*screen.height;
       var star=document.createElement("div");
    star.classList.add("star")
     body.appendChild(star);
     setInterval(runStar,10);
       star.style.top=top+"px";
     function runStar(){
       if(right>=screen.width){
         star.remove();
       }
       right+=3;
       star.style.right=right+"px";
     }
     }
});

/*
// login.html
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
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

  if (!name || !email || !password || !confirmPassword) {
    window.location.href = '404.html';
  } else if (password !== confirmPassword) {
    window.location.href = '404.html';
  } else {
    // You can add your register logic here
    // For now, it will just redirect to the 404.html page
    window.location.href = '404.html';
  }
});   */