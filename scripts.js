function playSound(soundId) {
  var sound = document.getElementById(soundId);
  
  if (sound) {  // Проверяем, существует ли элемент
    if (sound.paused) {
      sound.play();  // Если звук был на паузе, воспроизводим его
    } else {
      sound.pause();  // Если звук уже играет, ставим его на паузу
      sound.currentTime = 0;  // Останавливаем его и возвращаем в начало
      sound.play();  // Снова начинаем воспроизведение
    }
  } else {
    console.error('Звук с таким ID не найден:', soundId);  // Сообщение об ошибке, если звука нет
  }
}

window.onload = function() {
  // Проверяем параметр в URL, например: mysite.com/?sound=sound1
  const urlParams = new URLSearchParams(window.location.search);
  const sound = urlParams.get('sound');
  
  if (sound) {
    playSound(sound);  // Если параметр sound есть, вызываем функцию воспроизведения
  }
};
