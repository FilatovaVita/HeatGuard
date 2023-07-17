(() => {

  let modal = document.querySelector("[data-modal]");
  let span = document.querySelectorAll("[data-modal-close]")[0];

  let allBtn = document.querySelectorAll('[data-modal-open]'); /* Берем все кнопки */
  allBtn.forEach(function(element) {
    element.onclick = showModal;
  })

  function showModal() {
    modal.classList.toggle("backdrop--is-hidden");
  }

  span.onclick = function () {
    modal.classList.toggle("backdrop--is-hidden");
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.classList.toggle("backdrop--is-hidden");
    }
  }

})();
(()=>{
  let acc = document.getElementsByClassName("accordionn");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})();
(()=>{
  document.addEventListener('DOMContentLoaded', function() {
    // конечная дата, например 1 июля 2021
    const deadline =  new Date("July 31 2023 00:00:00 GMT+0300");
    // id таймера
    let timerId = null;

    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline -  new Date().getTime()
      if (diff <= 0) {
        clearInterval(timerId);
      }

      const days = diff > 0 ? Math.floor(diff /  1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'днів']);
      $hours.dataset.title = declensionNum(hours, ['година', 'годин', 'годин']);
      $minutes.dataset.title = declensionNum(minutes, ['хвилина', 'хвилин', 'хвилин']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунди', 'секунд']);
    }

    countdownTimer()
    // // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000)});
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
})();