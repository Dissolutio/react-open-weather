import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import RainbowInput from "../Weather/RainbowInput";
import ZigZagInput from "../Weather/ZigZagInput";
import AutoSuggestPlaces from "../Weather/AutoSuggestPlaces";
import BigGlo2 from "./BigGlo2";
import WeatherContainer from "../Weather/WeatherContainer";
import ForecastContainer from "../Weather/ForecastContainer";

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      glowButtonOn: false,
      weatherData: null,
      forecastData: null,
      lat: "",
      lon: "",
      placeQuery: "",
      error: null,
      latLonForecastError: null,
      latLonWeatherError: null,
      latLonFormValidationError: null
    };
    this.autocompleteInputChange = this.autocompleteInputChange.bind(this);
    this.autocompleteCitySelected = this.autocompleteCitySelected.bind(this);
    this.toggleGlowButton = this.toggleGlowButton.bind(this);
    this.onSubmitFormContainer = this.onSubmitFormContainer.bind(this);
  }
  baseUrl = apiFeature =>
    `https://api.openweathermap.org/data/2.5/${apiFeature}`;

  autocompleteCitySelected = (lat, lon, placeQuery) => {
    this.setState({ lat, lon, placeQuery }, () => {});
  };
  autocompleteInputChange(event) {
    this.setState({ placeQuery: event.target.value });
  }
  getWeatherFromLatLon(lat, lon) {
    axios
      .get(`${this.baseUrl("weather")}`, {
        params: {
          lat: `${lat}`,
          lon: `${lon}`,
          units: `imperial`,
          appid: `${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        }
      })
      .then(response => {
        this.setState({ weatherData: response.data });
      })
      .catch(error => {
        this.setState({ latLonWeatherError: error });
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
        this.setState({ forecastData: response.data });
      })
      .catch(error => {
        this.setState({ latLonForecastError: error });
      });
  }
  onSubmitFormContainer(event) {
    event.preventDefault();
    if (!this.state.lat || !this.state.lon) {
      this.setState({
        latLonFormValidationError: {
          message:
            "Go where? Select a city, or enter a latitude and longtitude."
        }
      });
      return;
    }
    this.getWeatherFromLatLon(this.state.lat, this.state.lon);
    this.getForecastFromLatLon(this.state.lat, this.state.lon);
    this.toggleGlowButton();
  }
  toggleGlowButton() {
    this.setState({ glowButtonOn: !this.state.glowButtonOn });
  }

  render() {
    return (
      <AppWrapper darkBG={this.state.glowButtonOn}>
        <FormContainer
          onSubmit={this.onSubmitFormContainer}
          className="container">
          <AutoSuggestPlaces
            autocompleteCitySelected={this.autocompleteCitySelected}
          />
          <RainbowInput
            htmlNameForInput="lon"
            inputLabelText="Longitude"
            onInputChange={this.autocompleteInputChange}
            inputValue={this.state.placeQuery}
          />
          <ZigZagInput
            htmlNameForInput="lon"
            inputLabelText="Longitude"
            onInputChange={() => {}}
            inputValue={this.state.lon}
          />
          <ZigZagInput
            htmlNameForInput="lat"
            inputLabelText="Latitude"
            inputValue={this.state.lat}
          />
          <h3 style={{ color: "red" }}>
            {(this.state.latLonFormValidationError &&
              this.state.latLonFormValidationError.message) ||
              ""}
          </h3>
          <BigGlo2
            onButtonClick={this.onSubmitFormContainer}
            glowButtonOn={this.state.glowButtonOn}
          />
        </FormContainer>
        <WeatherContainer weatherData={this.state.weatherData} />
        <ForecastContainer forecastData={this.state.forecastData} />
      </AppWrapper>
    );
  }
}
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  font-family: ${props =>
    props.darkBG ? "'Press Start 2P', cursive" : "sans-serif"};
  font-size: 16px;
  background: ${props => (props.darkBG ? "#222" : "#abbaab")};
  background: ${props =>
    props.darkBG ? "#222" : `linear-gradient(135deg, #ffffff, #abbaab)`};
  transition: background-color 300ms ease;
  .zigzag-input-label {
    font-color: ${props => (props.darkBG ? "#fff" : "#222")};
  }
`;
const FormContainer = styled.form`
  margin-top: 5rem;
`;

export default App2;
