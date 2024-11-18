// Function to toggle and save the theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme'); // Retrieve saved theme
    const themeStyle = document.getElementById('theme');
    const toggleSwitch = document.getElementById('toggle');

    // Default to light mode if no theme is saved
    if (savedTheme === 'dark') {
        themeStyle.setAttribute('href', 'assets/css/dark.css');
        toggleSwitch.className = 'fa-solid fa-moon';
    } else {
        themeStyle.setAttribute('href', 'assets/css/light.css');
        toggleSwitch.className = 'fa-solid fa-sun';
        localStorage.setItem('theme', 'light'); // Set default to light
    }
});

const switchMode = () => {
    const themeStyle = document.getElementById('theme');
    const toggleSwitch = document.getElementById('toggle');

    if (themeStyle.getAttribute('href') === 'assets/css/light.css') {
        themeStyle.setAttribute('href', 'assets/css/dark.css');
        toggleSwitch.className = 'fa-solid fa-moon';
        localStorage.setItem('theme', 'dark'); // Save to localStorage
    } else {
        themeStyle.setAttribute('href', 'assets/css/light.css');
        toggleSwitch.className = 'fa-solid fa-sun';
        localStorage.setItem('theme', 'light'); // Save to localStorage
    }
};

const checkbox = document.getElementById('check');
const body = document.body;
const cancelIcon = document.getElementById('cancel');

// Disable scroll when menu opens
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
});

// Enable scroll when the "X" icon is clicked
cancelIcon.addEventListener('click', function () {
    checkbox.checked = false;
    body.classList.remove('no-scroll');
});

