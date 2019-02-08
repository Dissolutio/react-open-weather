// Imports
import React, { Component } from "react";
import Script from "react-load-script";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      query: ""
    };
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

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        latitude: address.location.lat(),
        longitude: address.location.lon(),
        query: addressObject.formatted_address
      });
    }
  }
  inputChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div>
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_GOOGLE_PLACES_API_KEY
          }&libraries=places`}
          onLoad={this.handleScriptLoad}
        />
        <input
          id="autocomplete"
          placeholder=""
          hintText="Search City"
          onChange={event => this.inputChange(event)}
          value={this.state.query}
          style={{
            margin: "0 auto",
            width: "800px"
          }}
        />
      </div>
    );
  }
}

export default Search;
