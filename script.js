// Floating Background Elements
const bgContainer = document.getElementById('bgElements');
const icons = ['❤️', '💖', '💕', '💗', '✨', '🌸', '💍'];

for (let i = 0; i < 30; i++) {
    const item = document.createElement('div');
    item.classList.add('floating-item');
    item.innerText = icons[Math.floor(Math.random() * icons.length)];
    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDuration = (Math.random() * 4 + 4) + 's';
    item.style.animationDelay = (Math.random() * 5) + 's';
    item.style.fontSize = (Math.random() * 16 + 14) + 'px';
    bgContainer.appendChild(item);
}

// Background Music Logic
const audio = document.getElementById('loveAudio');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        musicBtn.classList.remove('playing');
        musicBtn.innerText = '🎵';
    } else {
        audio.play();
        musicBtn.classList.add('playing');
        musicBtn.innerText = '🎶';
    }
    isPlaying = !isPlaying;
}

// Dynamic Love Timer
const startDate = new Date('2024-01-01T00:00:00');
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById('loveTimer').innerText = `${days} Days, ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateTimer, 1000);
updateTimer();

// Dodge 'No' Button logic
const noBtn = document.getElementById('noBtn');
function moveNoButton() {
    const x = (Math.random() * 220) - 110;
    const y = (Math.random() * 160) - 80;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Celebration Popup & Fireworks
function acceptedProposal() {
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });

    document.getElementById('successModal').style.display = 'flex';
    if (!isPlaying) { toggleAudio(); }
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}
