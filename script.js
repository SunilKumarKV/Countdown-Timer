const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const themeToggle = document.getElementById("toggle-theme");

// Get next New Year date dynamically
function getNextNewYear() {
  const now = new Date();
  const year = now.getFullYear() + 1;
  return new Date(`January 1 ${year} 00:00:00`);
}

function countdown() {
  const newYearDate = getNextNewYear();
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  updateEl(daysEl, formatTime(days));
  updateEl(hoursEl, formatTime(hours));
  updateEl(minsEl, formatTime(mins));
  updateEl(secondsEl, formatTime(seconds));
}

function updateEl(element, newValue) {
  if (element.innerText !== newValue) {
    element.classList.remove("tick");
    // Force reflow to restart animation
    void element.offsetWidth;
    element.classList.add("tick");
    element.innerText = newValue;
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initialize countdown
countdown();
setInterval(countdown, 1000);

// Theme toggle button event
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
