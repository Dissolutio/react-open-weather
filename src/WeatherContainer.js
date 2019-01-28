import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.getWeatherData = this.getWeatherData.bind(this);
    this.updateWeatherData = this.updateWeatherData.bind(this);
  }

  state = {
    weatherData: null,
  };

  componentDidMount = () => {
    this.getWeatherData();
  };
  getWeatherData() {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: 'Austin',
          units: 'imperial',
          appid: `${process.env.REACT_APP_WEATHER_API}`,
        },
      })
      .then((response) => {
        this.updateWeatherData(response.data);
      })
  }

  updateWeatherData(responseData) {
    this.setState({ weatherData: responseData });
  }

  render() {
    console.log(this.props);
    if (this.state.weatherData) {
      const { humidity, pressure, temp, temp_min, temp_max } = this.state.weatherData.main;
      return (
        <div>
          <h2>{this.state.weatherData.name}</h2>
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
}

WeatherContainer.propTypes = {
  baseURL: PropTypes.string,
  cityToQuery: PropTypes.string,
  units: PropTypes.string,
};
