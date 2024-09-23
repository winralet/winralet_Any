function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const validPassword = 'Аня';

    if (passwordInput === validPassword) {
        document.getElementById('registration').style.display = 'none';
        document.getElementById('photo').style.display = 'block';
        document.getElementById('name').style.display = 'block';
        audio();
    } else {
        alert('Неверный пароль! Попробуйте еще раз.');
    }
}

function audio() {
    // Запускаем звуковой файл
    const audio = new Audio('Joji - Tick Tock.mp3'); // Укажите путь к звуковому файлу
    audio.play(); // Играть звук
}