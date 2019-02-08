import React, { Component } from "react";
import Script from "react-load-script";

export default class AutoSuggestPlacesRemix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lon: 0,
      placeQuery: ""
    };
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  }

  handleScriptLoad() {
    // Declare Options For Autocomplete
    var options = {
      types: ["(cities)"]
    }; // To disable any eslint 'google not defined' errors
    const { domElementIdToAutoSuggest } = this.props;

    // Initialize Google Autocomplete
    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById(`${domElementIdToAutoSuggest}`),
      options
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  }

  handlePlaceSelect() {
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.geometry;
    // Check if address is valid
    if (address) {
      const lat = Math.floor(address.location.lat());
      const lon = Math.floor(address.location.lon());
      // Set State
      this.setState({
        lat,
        lon,
        placeQuery: addressObject.formatted_address
      });
    }
  }
  render() {
    return (
      <>
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_GOOGLE_PLACES_API_KEY
          }&libraries=places`}
          onLoad={this.handleScriptLoad}
        />
        <div>
          <p>lat: {this.state.lat}</p>
          <p>lon: {this.state.lon}</p>
          <p>placeQuery: {this.state.placeQuery}</p>
        </div>
      </>
    );
  }
}
