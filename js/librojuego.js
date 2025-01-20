
/*card*/
function mostrarCard(cardId) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      card.style.display = 'none';
  });

  const selectedCard = document.getElementById(cardId);
  selectedCard.style.display = 'block';

  const cardIds = ['card4', 'card5', 'card6', 'card7'];
  if (cardIds.includes(cardId)) {
    setTimeout(() => {
      document.querySelector(`#${cardId} .login-form`).style.display = 'block';
      document.querySelector(`#${cardId} .login-form`).style.opacity = '0';
      document.querySelector(`#${cardId} .scenario`).style.filter = 'blur(5px)';
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        document.querySelector(`#${cardId} .login-form`).style.opacity = '1';
      }, 500);
    }, 12000);
  }
  /*btn-back*/
  const backButton = selectedCard.querySelector('.btn-back');
  backButton.addEventListener('click', function() {
      document.getElementById('loginForm').style.display = 'none';
  });
}
/*exit login form*/
document.addEventListener("click", function(event) {
    if (!event.target.closest(".login-form")) {
      document.querySelector(".login-form").style.display = "none";
      document.body.style.overflow = " auto";
    }
  });