import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import RainbowInput from "./RainbowInput";
import ZigZagInput from "./ZigZagInput";
import AutoSuggestPlaces from "./AutoSuggestPlaces";
import WeatherContainer from "./WeatherContainer";
import ForecastContainer from "./ForecastContainer";
import SubmitButton from "../components/SubmitButton/SubmitButton.js";

class PlaceForm extends Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lon: "",
      placeQuery: " ",
      error: null,
      weatherData: null,
      forecastData: null
    };
    this.autocompleteInputChange = this.autocompleteInputChange.bind(this);
    this.autocompleteCitySelected = this.autocompleteCitySelected.bind(this);
  }
  baseUrl = apiFeature =>
    `https://api.openweathermap.org/data/2.5/${apiFeature}`;
  autocompleteCitySelected = (lat, lon, placeQuery) => {
    this.setState({ lat, lon, placeQuery }, () => {
      this.getWeatherFromLatLon(lat, lon);
      this.getForecastFromLatLon(lat, lon);
    });
  };

  autocompleteInputChange(event) {
    this.setState({ placeQuery: event.target.value });
  }
  getWeatherFromLatLon(lat, lon) {
    axios
      .get(`${this.baseUrl("weather")}`, {
        params: {
          lat,
          lon: lon,
          appid: `${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        }
      })
      .then(response => {
        this.updateWeatherData(response.data);
      })
      .catch(error => {
        this.setState({ error });
      });
  }
  getForecastFromLatLon(lat, lon) {
    axios
      .get(`${this.baseUrl("forecast")}`, {
        params: {
          lat,
          lon,
          appid: `${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        }
      })
      .then(response => {
        this.updateForecastData(response.data);
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  updateWeatherData(responseData) {
    this.setState({ weatherData: responseData });
  }
  updateForecastData(responseData) {
    this.setState({ forecastData: responseData });
  }
  onSubmitFormContainer(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <FormContainer
          onSubmit={this.onSubmitFormContainer}
          className="container">
          <AutoSuggestPlaces
            autocompleteCitySelected={this.autocompleteCitySelected}
          />
          <RainbowInput
            autocompleteInputChange={this.autocompleteInputChange}
          />
          <ZigZagInput />
          <SubmitButton />
        </FormContainer>
        <WeatherContainer weatherData={this.state.weatherData} />
        <ForecastContainer forecastData={this.state.forecastData} />
      </>
    );
  }
}
const FormContainer = styled.div`
  margin-top: 5rem;
`;

export default PlaceForm;
