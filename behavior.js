console.log("behavior.js is running");

// ===== Listener 1 : le bouton change le titre =====

// 1. Sélectionner les éléments
const title = document.querySelector(".page-title");
const shoutButton = document.querySelector(".shout-button");

// 2. La fonction qui modifie la page
function sayHello() {
  title.textContent = "Bonjour à toutes et à tous ! 🎉";
}

// 3. Écouter le clic
shoutButton.addEventListener("click", sayHello);


// ===== Listener 2 : le bouton copie l'e-mail =====

// 1. Sélectionner les éléments
const email = document.querySelector(".email");
const copyButton = document.querySelector(".copy-email");

// 2. La fonction qui lit la page et copie le texte
function copyEmail() {
  navigator.clipboard.writeText(email.textContent);
  copyButton.textContent = "Copié !";

  // Bonus : le bouton revient à la normale après 2 secondes
  setTimeout(function () {
    copyButton.textContent = "Copier mon e-mail";
  }, 2000);
}

// 3. Écouter le clic
copyButton.addEventListener("click", copyEmail);