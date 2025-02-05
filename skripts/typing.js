const textArray = [
    'Hello! My name is Kirill Kozlov.',
    'I am a frontend developer.',
    'I can do some great things for you.'
];
const typingSpeed = 150; // Скорость печати
const delayBetweenTexts = 2000; // Задержка перед переходом к следующей строке

let textIndex = 0; // Индекс текущей строки
let charIndex = 0; // Индекс текущего символа
let isDeleting = false; // Флаг удаления текста

const typedTextElement = document.getElementById('typed-text');

function type() {
    const currentText = textArray[textIndex];
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let timeout = typingSpeed;
    if (!isDeleting && charIndex === currentText.length) {
        timeout = delayBetweenTexts;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        timeout = 500;
    }

    setTimeout(type, timeout);
}

type(); // Инициализация первой строки