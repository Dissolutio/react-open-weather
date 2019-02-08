import React, { Component } from "react";
import styled from "styled-components";
import {
  buttonLoading,
  buttonDotIntro,
  buttonDotPulse,
  buttonReady,
  buttonDotOutro,
  buttonReadyLabel
} from "./keyframes";

const OrganicSubmitButton = styled.button`
  position: relative;
  overflow: hidden;
  width: 7rem;
  color: #5585ff;
  border: 2px solid #5585ff;
  background-color: transparent;
  cursor: pointer;
  line-height: 2;
  margin: 0;
  padding: 0;
  border-radius: 1.5rem;
  font-size: 1.125rem;
  text-transform: lowercase;
  outline: none;
  transition: transform 0.125s;
  :active {
    transform: scale(0.9, 0.9);
  }
  &:before,
  &:after {
    position: absolute;
    opacity: 0;
    border-radius: 50%;
    background-color: transparent;
    top: 50%;
    left: 50%;
    margin-top: -1.125rem;
    margin-left: -1.125rem;
    width: 2.25rem;
    height: 2.25rem;
    content: "";
    z-index: 1;
  }
  &.loading {
    animation: ${buttonLoading} 0.5s forwards;
  }
  &.loading:before {
    opacity: 1;
    animation: ${buttonDotIntro} 0.5s forwards;
  }
  &.loading:after {
    opacity: 0;
    animation: ${buttonDotPulse} 1.5s infinite 0.5s;
  }
  &.ready {
    text-indent: 0;
    color: transparent;
    background-color: #5585ff;
    animation: ${buttonReady} 0.333s forwards;
  }
  &.ready:before {
    position: absolute;
    left: 0;
    right: 0;
    top: auto;
    margin: 0;
    width: auto;
    height: auto;
    border-radius: 0;
    background-color: transparent;
    color: #8cce1e;
    content: "ready";
    opacity: 0;
    z-index: 2;
    animation: ${buttonReadyLabel} 0.5s forwards 0.275s;
  }
  &.ready:after {
    opacity: 1;
    animation: ${buttonDotOutro} 0.333s;
  }
`;

export default class OrganicButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      ready: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = event => {
    event.preventDefault();
    setTimeout(() => {
      this.setState({ loading: true, ready: false });
    }, 125);
    setTimeout(() => {
      this.setState({ loading: false, ready: true });
    }, 4300);
  };

  render() {
    const readyClass = this.state.ready ? "ready" : "";
    const loadingClass = this.state.loading ? "loading" : "";
    return (
      <div>
        <OrganicSubmitButton
          className={`${readyClass} ${loadingClass}`}
          onClick={this.handleOnClick}
          type="submit">
          Send
        </OrganicSubmitButton>
      </div>
    );
  }
}
