import React, { Component } from "react";
import Script from "react-load-script";

export default class AutoSuggestPlaces extends Component {
  constructor(props) {
    super(props);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  }

  handleScriptLoad() {
    // Declare Options For Autocomplete
    var options = {
      types: ["(cities)"]
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  }

  handlePlaceSelect() {
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.geometry;
    if (address) {
      const lat = address.location.lat();
      // googleMaps use 'lng', OpenWeather uses 'lon'
      const lon = address.location.lng();
      // Set State
      this.props.autocompleteCitySelected(
        lat,
        lon,
        addressObject.formatted_address
      );
    }
  }
  render() {
    return (
      <Script
        url={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.REACT_APP_GOOGLE_PLACES_API_KEY
        }&libraries=places`}
        onLoad={this.handleScriptLoad}
      />
    );
  }
}
