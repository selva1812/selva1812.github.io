// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Set label text based on URL parameter
window.onload = function () {
    const labelTextParam = getQueryParam('label');
    if (labelTextParam) {
        document.getElementById('label-text').textContent = labelTextParam;
    }
};

// Timer functions remain unchanged
let currentTimer = null;

function updateTimer(remainingSeconds, labelText) {
    const timerText = document.getElementById('timer-text');
    if (remainingSeconds > 0) {
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
        timerText.textContent = `Reserved for ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        currentTimer = setTimeout(() => updateTimer(remainingSeconds - 1, labelText), 1000);
    } else {
        timerText.textContent = '';
        document.getElementById('label-text').textContent = getQueryParam('label') || 'Sausage Roll';
    }
}

function onButtonClick(durationMinutes, displayTime) {
    // Cancel existing timer if running
    if (currentTimer) {
        clearTimeout(currentTimer);
        currentTimer = null;
    }

    const labelText = `Room is reserved for ${displayTime}`;
    document.getElementById('label-text').textContent = labelText;

    // Convert duration to seconds and start the timer
    const durationSeconds = durationMinutes * 60;
    updateTimer(durationSeconds, labelText);
}
