let countdownElement = document.getElementById('countdown');
let startButton = document.getElementById('startButton');
let resetButton = document.getElementById('resetButton');
let timerSound = document.getElementById('timerSound');

let countdown;
let timeRemaining = 60; // 1 minute in seconds

function updateCountdown() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${String(seconds).padStart(2, '0')}`;
    
    if (timeRemaining > 0) {
        timeRemaining--;
    } else {
        clearInterval(countdown);
        timerSound.play();
    }
}

startButton.addEventListener('click', function() {
    if (!countdown) {
        timerSound.play();
        countdown = setInterval(updateCountdown, 1000);
    }
});

resetButton.addEventListener('click', function() {
    clearInterval(countdown);
    countdown = null;
    timeRemaining = 60; // Reset to 1 minute
    updateCountdown();
    timerSound.pause();
    timerSound.currentTime = 0; // Reset sound
});

// Initial countdown display
updateCountdown();
