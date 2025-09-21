const audio = new Audio();
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const musicInput = document.getElementById('musicInput');
const addMusicBtn = document.getElementById('addMusicBtn');
const repeatBtn = document.getElementById('repeatBtn');
const progressDot = document.getElementById('progressDot');
const editTitleBtn = document.getElementById('editTitleBtn');
const trackTitle = document.getElementById('trackTitle');
const albumArt = document.getElementById('albumArt');
const albumInput = document.getElementById('albumInput');

addMusicBtn.onclick = () => musicInput.click();

musicInput.onchange = (e) => {
  const file = e.target.files[0];
  if (file) {
    audio.src = URL.createObjectURL(file);
    audio.play();
    playBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
  }
};

playBtn.onclick = () => {
  audio.play();
  playBtn.classList.add('hidden');
  pauseBtn.classList.remove('hidden');
};

pauseBtn.onclick = () => {
  audio.pause();
  pauseBtn.classList.add('hidden');
  playBtn.classList.remove('hidden');
};

repeatBtn.onclick = () => {
  audio.loop = !audio.loop;
  repeatBtn.style.opacity = audio.loop ? 1 : 0.5;
};

audio.ontimeupdate = () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressDot.style.left = `${percent}%`;
};

editTitleBtn.onclick = () => {
  const newTitle = prompt("Enter new track title:");
  if (newTitle) trackTitle.textContent = newTitle;
};

albumArt.onclick = () => albumInput.click();

albumInput.onchange = (e) => {
  const file = e.target.files[0];
  if (file) {
    albumArt.src = URL.createObjectURL(file);
  }
};audio.ontimeupdate = () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressDot.style.left = `${percent}%`;
};

document.getElementById('repeatBtn').onclick = () => {
  isRepeating = !isRepeating;
  audio.loop = isRepeating;
};

document.getElementById('autoplayBtn').onclick = () => {
  isAutoplay = !isAutoplay;
  // You can add autoplay logic for next track here
};
playBtn.onclick = () => {
  audio.play();
  playBtn.classList.add('hidden');
  pauseBtn.classList.remove('hidden');
  pauseBtn.style.transform = 'scale(1.2)';
  setTimeout(() => pauseBtn.style.transform = 'scale(1)', 300);
};

pauseBtn.onclick = () => {
  audio.pause();
  pauseBtn.classList.add('hidden');
  playBtn.classList.remove('hidden');
  playBtn.style.transform = 'scale(1.2)';
  setTimeout(() => playBtn.style.transform = 'scale(1)', 300);
};
const albumInput = document.getElementById('albumInput');
const albumArt = document.getElementById('albumArt');
const editAlbumBtn = document.getElementById('editAlbumBtn');
const trackTitle = document.getElementById('trackTitle');

editAlbumBtn.onclick = () => albumInput.click();

albumInput.onchange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    albumArt.src = url;
  }
};

// Optional: Save title to localStorage
trackTitle.oninput = () => {
  localStorage.setItem('trackTitle', trackTitle.value);
};

// Load saved title on refresh
window.onload = () => {
  const savedTitle = localStorage.getItem('trackTitle');
  if (savedTitle) trackTitle.value = savedTitle;
};
const themeToggle = document.getElementById('themeToggle');

themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
};

// Load saved theme
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark');
};
let touchStartX = 0;
let touchEndX = 0;

document.body.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.body.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      console.log("Swiped right – previous track or view");
      // Add logic for previous track
    } else {
      console.log("Swiped left – next track or view");
      // Add logic for next track
    }
  }
}
audio.loop = true;
audio.autoplay = true;

// Optional: Resume playback after visibility change
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && !audio.paused) {
    audio.play();
  }
});
