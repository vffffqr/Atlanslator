document.addEventListener('DOMContentLoaded', () => {
    const inputBtn = document.querySelector('#input');
    const translateBtn = document.querySelector('#translateBtn');
    const outputDiv = document.querySelector('#output');

    // Ваша електронна пошта для API (щоб збільшити ліміт символів)
    const email = 'student@logika.school';

    async function translateText() {
        const text = inputBtn.value.trim();

        // Перевірка: якщо порожньо, нічого не робимо
        if (text === "") {
            outputDiv.innerText = "Будь ласка, введіть текст!";
            return;
        }

        // Формуємо безпечний URL
        const safeText = encodeURIComponent(text);
        const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;

        // Робимо запит
        const response = await fetch(url);
        const data = await response.json();

        // Виводимо результат
        // API повертає результат у data.responseData.translatedText
        outputDiv.innerText = data.responseData.translatedText;

    }
    translateBtn.addEventListener('click', translateText);
});
