import React from 'react';
import { useState } from 'react';




function App() {
  // const APIkey = "73a8058730c35dc98cc804337cb34b3a"
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("");


  const getWeather = (event) => {
    if (event.key = "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1efb191a901f9c852dfaf2561dc3c080`).then(
        responce => responce.json()
      ).then(
        data => {
          setWeatherData(data);
          // setCity("");
        }
      )
    }
  }


  return (
    <div className="App">
      <input className="input"
        type="text"
        placeholder="Enter the city ..."
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather} />


      {typeof weatherData.main === 'undefined' ? (
      <div>
        <p>Wilcome to weather app! Enter in a city to get the weather of.</p>
      </div>
      ): (
      <div>
        <p>{weatherData.name}</p>
        <p>{Math.round(weatherData.main.temp)} </p>
        <p>{weatherData.weather[0].main}</p>
      </div>
         )}




    </div>
  );
}

export default App;
