import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import RainbowInput from "./RainbowInput";
import ZigZagInput from "./ZigZagInput";
import AutoSuggestPlaces from "./AutoSuggestPlaces";
import BigGlo2 from "./BigGlo2";
import WeatherContainer from "./WeatherContainer";
import ForecastContainer from "./ForecastContainer";

const GlobalStyles = createGlobalStyle`
  body {
    @import url(https://fonts.googleapis.com/css?family=Audiowide);
  }
`;
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
    this.onTextInputChange = this.onTextInputChange.bind(this);
  }
  baseUrl = apiFeature =>
    `https://api.openweathermap.org/data/2.5/${apiFeature}`;

  autocompleteCitySelected = (lat, lon, placeQuery) => {
    this.setState({ lat: lat.toFixed(3), lon: lon.toFixed(3), placeQuery });
  };
  autocompleteInputChange(event) {
    this.setState({ placeQuery: event.target.value, glowButtonOn: false });
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
  onTextInputChange(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
      latLonFormValidationError: null,
      glowButtonOn: false
    });
  }
  onSubmitFormContainer(event) {
    event.preventDefault();
    if (!this.state.lat || !this.state.lon) {
      this.setState({
        latLonFormValidationError: {
          message: "Please select a city, or enter a latitude and longtitude."
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
  validationError = () => {
    return this.state.latLonFormValidationError &&
      this.state.latLonFormValidationError.message ? (
      <p>{this.state.latLonFormValidationError.message}</p>
    ) : null;
  };

  render() {
    return (
      <AppWrapper darkBG={this.state.glowButtonOn}>
        <GlobalStyles />
        <FormContainer
          onSubmit={this.onSubmitFormContainer}
          darkBG={this.state.glowButtonOn}>
          <AutoSuggestPlaces
            autocompleteCitySelected={this.autocompleteCitySelected}
          />
          <RainbowInput
            htmlNameForInput="placeQuery"
            inputHtmlId="autocomplete"
            inputLabelText="Search Cities"
            inputValue={this.state.placeQuery}
            onTextInputChange={this.autocompleteInputChange}
          />
          <ZigZagInput
            htmlNameForInput="lon"
            inputLabelText="Longitude"
            inputValue={`${this.state.lon}`}
            onTextInputChange={this.onTextInputChange}
          />
          <ZigZagInput
            htmlNameForInput="lat"
            inputLabelText="Latitude"
            inputValue={`${this.state.lat}`}
            onTextInputChange={this.onTextInputChange}
          />
          {this.validationError()}
          <BigGlo2
            onButtonClick={this.onSubmitFormContainer}
            glowButtonOn={this.state.glowButtonOn}
          />
        </FormContainer>
        {this.state.glowButtonOn && (
          <WeatherContainer weatherData={this.state.weatherData} />
        )}
        {/* <ForecastContainer forecastData={this.state.forecastData} /> */}
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  background: ${props => (props.darkBG ? "#050505" : "#abbaab")};
  background: ${props =>
    props.darkBG ? "#222" : `linear-gradient(135deg, #ffffff, #abbaab)`};
  transition: background-color 300ms ease;
`;
const FormContainer = styled.form`
  width: 90%;
  font-family: ${props =>
    props.darkBG ? "'Press Start 2P', cursive" : "sans-serif"};
  color: ${props => (props.darkBG ? "#3efa3e" : "#222")};
`;

export default App2;
