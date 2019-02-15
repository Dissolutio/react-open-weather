import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// TODO refactor css to be more styled-components minded
export default function RainbowInput({
  htmlNameForInput,
  inputLabelText,
  inputValue,
  inputHtmlId,
  onTextInputChange
}) {
  return (
    <div>
      <InputContainer>
        <input
          id={inputHtmlId}
          name={htmlNameForInput}
          type="text"
          placeholder={` `}
          onChange={onTextInputChange}
          value={inputValue}
        />
        <AnimatedRainbow />
      </InputContainer>
      <RainbowLabel className="rainbow-input-label" htmlFor={htmlNameForInput}>
        {inputLabelText}
      </RainbowLabel>
    </div>
  );
}
const AnimatedRainbow = () => (
  <>
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
  </>
);
const RainbowLabel = styled.label`
  position: relative;
  top: 10px;
  font-size: 1rem;
`;
const InputContainer = styled.div`
   {
    position: relative;
    margin-top: 1.3rem;
    width: 100%;
    max-width: 300px;
    input {
      background: transparent;
      border: 0;
      border-bottom: 2px solid black;
      font-size: 1rem;
      height: 2rem;
      outline: none;
      // subtract padding let/right, to line up with .clip width
      width: calc(100% - 0.6rem);
      padding-bottom: 4px;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
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
    input:focus ~ .clip-outer,
    input:not(:placeholder-shown) ~ .clip-outer {
      clip-path: ellipse(100% 350% at 50% 250%);
      transition: clip-path 500ms;
    }
    input:focus ~ .clip-inner,
    input:not(:placeholder-shown) ~ .clip-inner {
      clip-path: ellipse(100% 350% at 50% 250%);
    }
    input:focus ~ .clip-inner1,
    input:not(:placeholder-shown) ~ .clip-inner1 {
      transition: clip-path 500ms 20ms;
    }
    input:focus ~ .clip-inner2,
    input:not(:placeholder-shown) ~ .clip-inner2 {
      transition: clip-path 500ms 40ms;
    }
    input:focus ~ .clip-inner3,
    input:not(:placeholder-shown) ~ .clip-inner3 {
      transition: clip-path 500ms 60ms;
    }
    input:focus ~ .clip-inner4,
    input:not(:placeholder-shown) ~ .clip-inner4 {
      transition: clip-path 500ms 80ms;
    }
    input:focus ~ .clip-inner5,
    input:not(:placeholder-shown) ~ .clip-inner5 {
      transition: clip-path 500ms 100ms;
    }
    input:focus ~ .clip-inner6,
    input:not(:placeholder-shown) ~ .clip-inner6 {
      transition: clip-path 500ms 120ms;
    }
    input:focus ~ .clip-inner7,
    input:not(:placeholder-shown) ~ .clip-inner7 {
      transition: clip-path 500ms 140ms;
    }
  }
`;
RainbowInput.propTypes = {
  htmlNameForInput: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputLabelText: PropTypes.string,
  inputHtmlId: PropTypes.string
};
RainbowInput.defaultProps = {
  inputLabelText: `label`
};
