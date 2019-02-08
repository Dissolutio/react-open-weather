import React, { Component } from "react";
import Script from "react-load-script";

function withAutosuggest(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }
    handleScriptLoad() {
      var options = {
        types: ["(cities)"]
      };
      this.autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("autocomplete"),
        options
      );

      // Fire Event when a suggested name is selected
      this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
    }

    handlePlaceSelect() {
      // Extract City From Address Object
      let addressObject = this.autocomplete.getPlace();
      if (addressObject) {
        this.setState({});
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
    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
