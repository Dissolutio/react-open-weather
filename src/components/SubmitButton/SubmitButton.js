import React, { Component } from "react";
import "./submit-button.css";

export default class SubmitButton extends Component {
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
      <div>
        <button
          onClick={this.onButtonClick}
          type="submit"
          className={`glow-btn ${btnOnClass}`}>
          go
        </button>
      </div>
    );
  }
}
