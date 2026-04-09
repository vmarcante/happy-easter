const musicControl = document.getElementById('musicControl');
const audioPlayer = document.getElementById('audioPlayer');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const progressStroke = document.getElementById('progressStroke');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('caption');
const closeModal = document.querySelector('.close');
const galleryItems = document.querySelectorAll('.photo img');
const volumeSlider = document.getElementById('volumeSlider');

let isPlaying = false;

audioPlayer.volume = 0.1;

volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    audioPlayer.volume = volume;
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

audioPlayer.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    const offset = 100 - progress;
    progressStroke.style.strokeDashoffset = offset;
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
});

const welcomeOverlay = document.getElementById('welcomeOverlay');

welcomeOverlay.addEventListener('click', () => {
    welcomeOverlay.classList.add('hidden');
    
    audioPlayer.play().then(() => {
        isPlaying = true;
        pauseIcon.style.display = 'block';
        playIcon.style.display = 'none';
        musicControl.title = 'Pausar música';
    }).catch((error) => {
        console.log('Erro ao tocar música:', error);
    });
});

musicControl.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        musicControl.title = 'Tocar música';
        isPlaying = false;
    } else {
        audioPlayer.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        musicControl.title = 'Pausar música';
        isPlaying = true;
    }
});

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = item.src;
        modalImage.alt = item.alt;
        modalCaption.textContent = item.title || item.alt;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

const photos = document.querySelectorAll('.photo');

function checkPhotoVisibility() {
    const windowHeight = window.innerHeight;
    
    photos.forEach(photo => {
        const rect = photo.getBoundingClientRect();
        const photoTop = rect.top;
        const photoBottom = rect.bottom;
        const photoMiddle = photoTop + (rect.height / 2);
        
        const isVisible = photoMiddle > 0 && photoMiddle < windowHeight;
        
        if (isVisible) {
            photo.classList.add('visible');
        } else {
            photo.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkPhotoVisibility);
window.addEventListener('load', checkPhotoVisibility);
window.addEventListener('resize', checkPhotoVisibility);

const overlayClickHandler = welcomeOverlay.querySelector('.welcome-content') || welcomeOverlay;
overlayClickHandler.addEventListener('click', () => {
    setTimeout(checkPhotoVisibility, 600);
});
