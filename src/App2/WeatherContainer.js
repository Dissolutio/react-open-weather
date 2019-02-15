import React from "react";
import styled from "styled-components";

export default function WeatherContainer(props) {
  if (props.weatherData) {
    console.log(props.weatherData);
    const { name } = props.weatherData;
    const {
      humidity,
      pressure,
      temp,
      temp_min,
      temp_max
    } = props.weatherData.main;
    return (
      <WeatherDiv>
        <h2>Weather in {name}:</h2>
        <p>humidity {humidity}</p>
        <p>pressure {pressure}</p>
        <p>Current Temp: {temp}</p>
        <p>temp_max {temp_max}</p>
        <p>temp_min {temp_min}</p>
      </WeatherDiv>
    );
  } else return null;
}
const WeatherDiv = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 1rem;
  color: #3efa3e;
`;
