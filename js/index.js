/*login form admin*/
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "mel" && password === "123") {

      window.location.href = `admin.html?user=${encodeURIComponent(username)}`;
    } else {
      
      const errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "block";
    }
  });
  