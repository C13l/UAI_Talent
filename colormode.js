document.addEventListener('DOMContentLoaded', () => {
    const lightButton = document.getElementById('lightMode');
    const darkButton = document.getElementById('darkMode');

    // Función para aplicar el tema
    function applyTheme(theme) {
        document.body.classList.remove('light-mode', 'dark-mode');
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.add('light-mode');
        }
    }

    // Verificar y aplicar la preferencia de tema inicial
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('light'); // Predeterminado a modo claro
    }

    // Cambiar tema al hacer clic
    lightButton.addEventListener('click', () => {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    });

    darkButton.addEventListener('click', () => {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    });
});