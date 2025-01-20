/*welcome message*/
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('user');

if (username) {
  const welcomeMessage = document.getElementById('welcome-message');
  welcomeMessage.innerHTML = `Bienvenido/a : <span style="color: #0051ff">${username}</span>`;
} else {
  window.location.href = "login.html";
}
