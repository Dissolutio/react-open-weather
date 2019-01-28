import React, { Component } from 'react';
import './Experiment.css'
class Experiment extends Component {
  render() {
    return (
      <div class="container">
        <div class="section">
          <div class="container-input">
            <input class="text-input" type="text" placeholder=" " />
            <div class="clip-outer clip">
              <div class="fill1 fill"></div>
            </div>
            <div class="clip-inner1 clip-inner clip">
              <div class="fill"></div>
            </div>
            <div class="clip-inner2 clip-inner clip">
              <div class="fill"></div>
            </div>
            <div class="clip-inner3 clip-inner clip">
              <div class="fill"></div>
            </div>
            <div class="clip-inner4 clip-inner clip">
              <div class="fill"></div>
            </div>
            <div class="clip-inner5 clip-inner clip">
              <div class="fill"></div>
            </div>
            <div class="clip-inner6 clip-inner clip">
              <div class="fill"></div>
            </div>
            <div class="clip-inner7 clip-inner clip">
              <div class="fill"></div>
            </div>
          </div>
          your name
      </div>
        <div class="section">
          <div class="container-input">
            <input class="text-input" type="text" placeholder=" " />
            <div class="clip-second-outer">
              <div class="fill-second">
                <div class="fill-second-zigzag1 fill-second-zigzag"></div>
                <div class="fill-second-rect1"></div>
              </div>
            </div>
            <div class="clip-second-inner">
              <div class="fill-second">
                <div class="fill-second-zigzag2 fill-second-zigzag"></div>
                <div class="fill-second-rect2"></div>
              </div>
            </div>
            <div class="clip-second-inner">
              <div class="fill-second">
                <div class="fill-second-zigzag3 fill-second-zigzag"></div>
                <div class="fill-second-rect3"></div>
              </div>
            </div>
          </div>
          your email
      </div>
      </div>
    );
  }
}

export default Experiment;
