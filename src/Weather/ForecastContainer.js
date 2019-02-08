import React from "react";
import styled from "styled-components";

export default function ForecastContainer(props) {
  const { forecastData } = props;
  console.log(forecastData);
  if (forecastData) {
    return (
      <div>
        <h1>Forecast Data for {forecastData.city.name}</h1>
        {Object.keys(forecastData.city).map(keyName => {
          return <p key={keyName}>{keyName.toString()}</p>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
