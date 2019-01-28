import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class PlacesContainer extends Component {
	constructor(props) {
		super(props);
		this.getPlacesSuggestions = this.getWeatherData.bind(this);
		this.updatePlacesSuggestions = this.updatePlacesSuggestions.bind(this);
	}

	state = {
		placesSuggestions: null,
	};

	componentDidMount = () => {
		this.getPlacesSuggestions();
	};
	getPlacesSuggestions() {
		axios
			.get('http://api.openweathermap.org/data/2.5/weather', {
				params: {
					q: 'Austin',
					units: 'imperial',
					mapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API}`,
				},
			})
			.then((response) => {
				this.updatePlacesSuggestions(response.data);
			})
	}

	updatePlacesSuggestions(responseData) {
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
					<h1>I am the weather container!</h1>
				</div>
			);
	}
}

WeatherContainer.propTypes = {
	baseURL: PropTypes.string,
	cityToQuery: PropTypes.string,
	units: PropTypes.string,
};
