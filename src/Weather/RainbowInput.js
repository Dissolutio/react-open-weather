import React from "react";
import styled from "styled-components";

const RainbowInput = props => {
  const { autocompleteInputChange } = props;
  return (
    <div className="section">
      <InputContainer>
        <input
          id="autocomplete"
          className="text-input"
          name="placeWeather"
          type="text"
          placeholder={` `}
          onChange={autocompleteInputChange}
        />
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
      </InputContainer>
      <label className="rainbow-input-label" htmlFor="placeWeather">
        Get weather for a city
      </label>
    </div>
  );
};
const InputContainer = styled.div`
   {
    position: relative;
    margin-top: 1.3rem;
    .rainbow-input-label {
      position: relative;
      top: 10px;
    }
    .text-input {
      background: transparent;
      border: 0;
      border-bottom: 2px solid black;
      font-size: 20px;
      height: 50px;
      outline: none !important;
      width: 280px;
      padding-bottom: 4px;
      padding: 0 10px;
      position: relative;
      z-index: 1;
    }
    .clip {
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
    }
    .clip-outer {
      clip-path: ellipse(100% 350% at 0% 470%);
      transition: clip-path 500ms 140ms;
    }
    .clip-inner {
      clip-path: ellipse(100% 350% at 0% 470%);
      height: calc(100% - 4px);
      left: 2px;
      pointer-events: none;
      top: 2px;
      width: calc(100% - 4px);
    }
    .clip-inner1 {
      background: #5c2983;
      transition: clip-path 500ms 120ms;
    }
    .clip-inner2 {
      background: #0076c5;
      transition: clip-path 500ms 100ms;
    }
    .clip-inner3 {
      background: #21b372;
      transition: clip-path 500ms 80ms;
    }
    .clip-inner4 {
      background: #fdde02;
      transition: clip-path 500ms 60ms;
    }
    .clip-inner5 {
      background: #f76700;
      transition: clip-path 500ms 40ms;
    }
    .clip-inner6 {
      background: #d30018;
      transition: clip-path 500ms 20ms;
    }
    .clip-inner7 {
      background: #fff;
      transition: clip-path 500ms;
    }
    .fill {
      height: 100%;
      width: 100%;
    }
    .fill1 {
      background: #000;
    }
    .text-input:focus ~ .clip-outer,
    .text-input:not(:placeholder-shown) ~ .clip-outer {
      clip-path: ellipse(100% 350% at 50% 250%);
      transition: clip-path 500ms;
    }
    .text-input:focus ~ .clip-inner,
    .text-input:not(:placeholder-shown) ~ .clip-inner {
      clip-path: ellipse(100% 350% at 50% 250%);
    }
    .text-input:focus ~ .clip-inner1,
    .text-input:not(:placeholder-shown) ~ .clip-inner1 {
      transition: clip-path 500ms 20ms;
    }
    .text-input:focus ~ .clip-inner2,
    .text-input:not(:placeholder-shown) ~ .clip-inner2 {
      transition: clip-path 500ms 40ms;
    }
    .text-input:focus ~ .clip-inner3,
    .text-input:not(:placeholder-shown) ~ .clip-inner3 {
      transition: clip-path 500ms 60ms;
    }
    .text-input:focus ~ .clip-inner4,
    .text-input:not(:placeholder-shown) ~ .clip-inner4 {
      transition: clip-path 500ms 80ms;
    }
    .text-input:focus ~ .clip-inner5,
    .text-input:not(:placeholder-shown) ~ .clip-inner5 {
      transition: clip-path 500ms 100ms;
    }
    .text-input:focus ~ .clip-inner6,
    .text-input:not(:placeholder-shown) ~ .clip-inner6 {
      transition: clip-path 500ms 120ms;
    }
    .text-input:focus ~ .clip-inner7,
    .text-input:not(:placeholder-shown) ~ .clip-inner7 {
      transition: clip-path 500ms 140ms;
    }
  }
`;
export default RainbowInput;
