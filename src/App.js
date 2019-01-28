import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import WeatherContainer from './WeatherContainer';
const routes = [
  {
    path: `/weather`,
    Component: WeatherContainer,
    weatherProps: {
      baseURL: `Base URL monster`,
      cityToQuery: `city to query baby!`,
      units: `imperial please`,
    },
  },
];

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Link to="/weather">Weather in Austin</Link>
          <hr />
          {routes.map(({ path, Component, weatherProps }) => (
            <Route
              key={path}
              path={path}
              render={props => <Component props={props} weatherProps={weatherProps} />}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
