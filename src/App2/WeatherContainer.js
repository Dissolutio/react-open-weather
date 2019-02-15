import React from "react";

export default function WeatherContainer(props) {
  if (props.weatherData) {
    const {
      humidity,
      pressure,
      temp,
      temp_min,
      temp_max
    } = props.weatherData.main;
    return (
      <div>
        <h2>Weather Data!</h2>
        <p>humidity {humidity}</p>
        <p>pressure {pressure}</p>
        <p>temp {temp}</p>
        <p>temp_max {temp_max}</p>
        <p>temp_min {temp_min}</p>
      </div>
    );
  } else
    return (
      <div>
        <h1>Loading Weather</h1>
      </div>
    );
}
