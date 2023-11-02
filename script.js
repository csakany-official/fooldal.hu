
function updateDateTime() {
    const currentDate = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('hu-HU', options);

    const formattedTime = currentDate.toLocaleTimeString('hu-HU');

    const dateTimeString = `Aktuális idő és dátum: ${formattedTime}, ${formattedDate}`;

    document.getElementById('current-time').textContent = dateTimeString;
}


setInterval(updateDateTime, 1000);

updateDateTime();



// Téma váltás
function toggleTheme() {
    const currentTheme = document.getElementById('theme-style').getAttribute('href');
    const newTheme = currentTheme.includes('light') ? 'dark-theme.css' : 'light-theme.css';

    document.getElementById('theme-style').setAttribute('href', newTheme);
}
