import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";
import PlaceForm from "./components/PlaceForm/PlaceForm";

// note: weatherRoute.weatherProps is not really used, currently
const weatherRoute = [
  {
    path: `/weather`,
    Component: WeatherContainer,
    weatherProps: {
      baseURL: `Base URL monster`,
      cityToQuery: `city to query baby!`,
      units: `imperial please`
    }
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {weatherRoute.map(({ path, Component, weatherProps }) => (
            <Route
              key={path}
              path={path}
              render={props => (
                <Component props={props} weatherProps={weatherProps} />
              )}
            />
          ))}
          <Route path="/" render={props => <PlaceForm props={props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
