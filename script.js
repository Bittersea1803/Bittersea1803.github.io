// script.js

// Odbrojavanje do datuma vjenčanja
const countdownElement = document.getElementById('countdown');
const weddingDate = new Date('2024-10-26T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdownElement.innerText = `Preostalo je ${days} dana do velikog dana!`;

    if (distance < 0) {
        countdownElement.innerText = "Sretan dan vjenčanja!";
    }
}

setInterval(updateCountdown, 1000);

// Dodavanje srca za animaciju
setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 500);
