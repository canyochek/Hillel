function timer(minute, second) {
  if (minute < 60 && minute >= 0 && second < 60 && second >= 0) {
    const setIntervalId = setInterval(function() {
      const timerVisual = document.querySelector(".timer");
      if (second == 0 && minute == 0) {
          clearInterval(setIntervalId)
      }
      const timerMinute = String(minute).padStart(2, '0')
      const timerSecond = String(second).padStart(2, '0')
      timerVisual.textContent = `${timerMinute} : ${timerSecond}`
      second--

      if (second < 0) {
        minute--
        second = 59
      } 
      
    }, 1000)
  } else {
    console.log("Некоректний синтаксис")
  }
}
const minutes = Number(prompt());
const seconds = Number(prompt());
timer(minutes, seconds)