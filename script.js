/* ===== Valentine's for Jaan - Script ===== */

// ----- Generate stars -----
function createStars() {
  const container = document.getElementById('starsContainer');
  if (!container) return;
  const sizes = ['small', 'medium', 'large'];
  for (let i = 0; i < 120; i++) {
    const star = document.createElement('span');
    star.className = 'star ' + sizes[Math.floor(Math.random() * sizes.length)];
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    container.appendChild(star);
  }
}
createStars();

// ----- Typing animation -----
const messages = [
  "Jaan, you make every moment magical...",
  "With you, every day feels like Valentine's Day 💕",
  "You're not just my love, you're my forever...",
  "My heart belongs to you, Jaan. Always. ❤️"
];
let msgIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeEffect() {
  const current = messages[msgIndex];
  const typedEl = document.getElementById('typed');

  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 40;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 80;
  }

  if (!isDeleting && charIndex === current.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    msgIndex = (msgIndex + 1) % messages.length;
    typingSpeed = 500;
  }

  setTimeout(typeEffect, typingSpeed);
}
setTimeout(typeEffect, 800);

// ----- Love letter modal -----
const letterModal = document.getElementById('letterModal');
const btnLetter = document.getElementById('btnLetter');
const closeLetter = document.getElementById('closeLetter');
const surpriseMsg = document.getElementById('surpriseMsg');

btnLetter.addEventListener('click', () => {
  letterModal.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeLetter.addEventListener('click', () => {
  letterModal.classList.remove('active');
  document.body.style.overflow = '';
  surpriseMsg.textContent = 'I love you, Jaan 💕';
  surpriseMsg.classList.add('visible');
  setTimeout(() => surpriseMsg.classList.remove('visible'), 3000);
});

letterModal.addEventListener('click', (e) => {
  if (e.target === letterModal) {
    letterModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ----- 404 modal -----
const modal404 = document.getElementById('modal404');
const btn404 = document.getElementById('btn404');
const close404 = document.getElementById('close404');

btn404.addEventListener('click', () => {
  modal404.classList.add('active');
  document.body.style.overflow = 'hidden';
});

close404.addEventListener('click', () => {
  modal404.classList.remove('active');
  document.body.style.overflow = '';
});

modal404.addEventListener('click', (e) => {
  if (e.target === modal404) {
    modal404.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ----- Accept button - confetti + success -----
const btnAccept = document.getElementById('btnAccept');
const confettiContainer = document.getElementById('confettiContainer');
const successMsg = document.getElementById('successMsg');

const hearts = ['❤️', '💕', '💗', '💖', '💝', '🌸'];
const colors = ['#e84393', '#fd79a8', '#ff6b9d', '#ffb3c6', '#ffd93d', '#a29bfe'];

function createConfetti() {
  confettiContainer.innerHTML = '';
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement('div');
    confetti.className = Math.random() > 0.5 ? 'confetti heart' : 'confetti';
    confetti.textContent = Math.random() > 0.5 ? hearts[Math.floor(Math.random() * hearts.length)] : '';
    if (!confetti.textContent) {
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    }
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
    confettiContainer.appendChild(confetti);
  }
  setTimeout(() => {
    confettiContainer.innerHTML = '';
  }, 4000);
}

btnAccept.addEventListener('click', () => {
  btnAccept.classList.add('clicked');
  btnAccept.textContent = 'Accepted! 💕';
  btnAccept.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';
  createConfetti();
  successMsg.classList.add('show');
  setTimeout(() => {
    surpriseMsg.textContent = "You're the best thing that ever happened to me, Jaan ✨";
    surpriseMsg.classList.add('visible');
  }, 1500);
  setTimeout(() => {
    successMsg.classList.remove('show');
  }, 5000);
});

// ----- Scroll surprise -----
window.addEventListener('scroll', () => {
  if (window.scrollY > 200 && !document.getElementById('btnAccept').classList.contains('clicked')) {
    surpriseMsg.textContent = "Keep scrolling... there's more love for you, Jaan 💕";
    surpriseMsg.classList.add('visible');
  }
});

// ----- Title click = burst of hearts -----
const mainTitle = document.getElementById('mainTitle');
mainTitle.addEventListener('click', () => {
  mainTitle.style.animation = 'none';
  mainTitle.offsetHeight;
  mainTitle.style.animation = 'titleHeartBurst 0.6s ease-out';
  setTimeout(() => {
    mainTitle.style.animation = 'fadeInDown 1s ease-out, pulse 2s ease-in-out 1s infinite';
  }, 600);
  createConfetti();
});
