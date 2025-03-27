document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');

    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        modeIcon.src = "https://img.icons8.com/ios-filled/50/moon-symbol.png";
    }
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDarkModeNow = body.classList.contains('dark-mode');
        modeIcon.src = isDarkModeNow ? "https://img.icons8.com/ios-filled/50/moon-symbol.png" : "https://img.icons8.com/ios-filled/50/sun.png";
        localStorage.setItem('darkMode', isDarkModeNow ? 'enabled' : 'disabled');
    });
});
