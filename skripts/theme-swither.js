// Получаем элементы
const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;

// Проверка, если темная тема уже активна (сохранение состояния)
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('light-theme');
}

// Обработчик переключения темы
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    // Сохраняем выбранную тему в localStorage
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});