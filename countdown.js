// Set the initial date we're counting down to
const initialCountdownDate = new Date("Dec 31, 2024 23:59:59").getTime();
let countdownDate = initialCountdownDate;
let countdownFunction;
let paused = false;
let timeRemaining = countdownDate - new Date().getTime();

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is finished, stop the timer
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}

// Start the countdown
function startCountdown() {
    paused = false;
    clearInterval(countdownFunction); // Clear any previous interval to prevent multiple intervals
    countdownFunction = setInterval(updateCountdown, 1000);
    document.getElementById("startBtn").disabled = true;
    document.getElementById("pauseBtn").disabled = false;
}

// Pause the countdown
function pauseCountdown() {
    clearInterval(countdownFunction); // Stop the countdown
    paused = true;
    timeRemaining = countdownDate - new Date().getTime(); // Store remaining time
    document.getElementById("startBtn").disabled = false;
    document.getElementById("pauseBtn").disabled = true;
}

// Reset the countdown
function resetCountdown() {
    clearInterval(countdownFunction); // Stop any running timer
    countdownDate = initialCountdownDate; // Reset the countdown date to the initial value
    updateCountdown(); // Immediately update the display to the initial values
    document.getElementById("startBtn").disabled = false; // Enable the start button
    document.getElementById("pauseBtn").disabled = true;  // Disable the pause button
}

// Add event listeners to the buttons
document.getElementById("startBtn").addEventListener("click", startCountdown);
document.getElementById("pauseBtn").addEventListener("click", pauseCountdown);
document.getElementById("resetBtn").addEventListener("click", resetCountdown);

// Initial setup
updateCountdown(); // Set initial values for countdown
document.getElementById("pauseBtn").disabled = true; // Disable pause button initially