document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const darkIcon = document.getElementById("dark-icon");
    const lightIcon = document.getElementById("light-icon");
    const themeToggle = document.getElementById("theme-toggle");
  
    // Проверяем сохранённую тему в localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-theme");
      darkIcon.style.display = "block";
      lightIcon.style.display = "none";
    }
  
    // Событие на переключение темы
    themeToggle.addEventListener("click", function () {
      // Переключаем класс темы
      body.classList.toggle("dark-theme");
  
      // Переключаем видимость иконок
      if (body.classList.contains("dark-theme")) {
        darkIcon.style.display = "block";
        lightIcon.style.display = "none";
        localStorage.setItem("theme", "dark"); // Сохраняем тёмную тему
      } else {
        darkIcon.style.display = "none";
        lightIcon.style.display = "block";
        localStorage.setItem("theme", "light"); // Сохраняем светлую тему
      }
    });
  });