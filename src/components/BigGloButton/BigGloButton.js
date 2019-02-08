import React, { Component } from "react";
import "./big-glo-button.css";

export default class BigGloButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonPressed: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick = () => {
    this.setState({ buttonPressed: !this.state.buttonPressed });
  };

  render() {
    const btnOnClass = this.state.buttonPressed ? "glow-btn-on" : "";
    return (
      <div
        className={`glow-btn-background ${
          this.state.buttonPressed ? "dark-bg" : ""
        }`}>
        <button
          onClick={this.onButtonClick}
          type="submit"
          className={`glow-btn ${
            this.state.buttonPressed ? "glow-btn-on" : ""
          }`}>
          go
        </button>
      </div>
    );
  }
}
