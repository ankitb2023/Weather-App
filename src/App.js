import React, { useState } from "react";
import { fetchWeather } from "./fetchWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);

      setQuery("");
    }
  };

  return (
    <>
      <div className="box">
        <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
        {weather.main && (
          <>
            <div className="city">
              <h2 className="location">
                {weather.name}
                <sup>{weather.sys.country}</sup>
              </h2>
              <h1 className="temp">{weather.main.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min: {weather.main.temp_min}°Cel | Max: {weather.main.temp_max}
                °Cel
              </h3>
              <div className="info">
                <img
                  className="city-icon"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
                <p className="description">{weather.weather[0].description}</p>
              </div>
              <div className="wave -one"></div>
              <div className="wave -two"></div>
              <div className="wave -three"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
