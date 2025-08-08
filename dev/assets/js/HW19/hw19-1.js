async function getWeather(lat, lon) {
  const apiKey = "2563c2d22db0e404b0fa6275ca5ae268"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const infoWeather = document.querySelector(".info-weather");
    infoWeather.textContent = `Місто: ${data.name}, Температура: ${data.main.temp}°C, Погода: ${data.weather[0].description}, Швидкість вітру: ${data.wind.speed} м/с`;
  } catch (error) {
    console.error("Помилка запиту:", error);
  }
}

const lat = 50.45;
const lon = 30.52;

getWeather(lat, lon);


document.querySelector(".update-info").addEventListener("click", () => {
  setInterval(() => {
    getWeather(lat, lon);
  }, 10000)
});