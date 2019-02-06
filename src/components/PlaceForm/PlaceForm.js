import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./rainbow-inputs.css";
class PlaceForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <Link to="/weather">Weather in Austin</Link>
          <div className="container-input">
            <input className="text-input" type="text" placeholder=" " />
            <div className="clip-outer clip">
              <div className="fill1 fill" />
            </div>
            <div className="clip-inner1 clip-inner clip">
              <div className="fill" />
            </div>
            <div className="clip-inner2 clip-inner clip">
              <div className="fill" />
            </div>
            <div className="clip-inner3 clip-inner clip">
              <div className="fill" />
            </div>
            <div className="clip-inner4 clip-inner clip">
              <div className="fill" />
            </div>
            <div className="clip-inner5 clip-inner clip">
              <div className="fill" />
            </div>
            <div className="clip-inner6 clip-inner clip">
              <div className="fill" />
            </div>
            <div className="clip-inner7 clip-inner clip">
              <div className="fill" />
            </div>
          </div>
          Get weather for a location
        </div>
        <div className="section">
          <div className="container-input">
            <input className="text-input" type="text" placeholder=" " />
            <div className="clip-second-outer">
              <div className="fill-second">
                <div className="fill-second-zigzag1 fill-second-zigzag" />
                <div className="fill-second-rect1" />
              </div>
            </div>
            <div className="clip-second-inner">
              <div className="fill-second">
                <div className="fill-second-zigzag2 fill-second-zigzag" />
                <div className="fill-second-rect2" />
              </div>
            </div>
            <div className="clip-second-inner">
              <div className="fill-second">
                <div className="fill-second-zigzag3 fill-second-zigzag" />
                <div className="fill-second-rect3" />
              </div>
            </div>
          </div>
          Get
        </div>
      </div>
    );
  }
}

export default PlaceForm;
