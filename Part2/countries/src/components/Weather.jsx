import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ latitude, longitude, country }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );
        setWeather(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeather();
  }, []);

  return (
    <>
      <h1>Weather in {country}</h1>
      {Object.keys(weather).length > 0 && (
        <>
          <p>temperature {weather.current.temp} celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
            alt="weather-icon"
          ></img>
          <p>wind {weather.current.wind_speed} m/s</p>
        </>
      )}
    </>
  );
};

export default Weather;
