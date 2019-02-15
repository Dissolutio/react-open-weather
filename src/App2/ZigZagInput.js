import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function ZigZagInput({
  htmlNameForInput,
  inputLabelText,
  inputValue,
  onInputChange
}) {
  return (
    <>
      <InputContainer>
        <input
          className="text-input"
          name={htmlNameForInput}
          type="text"
          placeholder={` `}
          value={inputValue}
        />
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
      </InputContainer>
      <label className="zigzag-input-label" htmlFor={htmlNameForInput}>
        {inputLabelText}
      </label>
    </>
  );
}
const InputContainer = styled.div`
   {
    position: relative;
    .zigzag-input-label {
      position: relative;
      top: 10px;
    }
    input {
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
    .clip-second-outer {
      height: 100%;
      left: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      width: 100%;
    }
    .clip-second-inner {
      height: calc(100% - 4px);
      left: 2px;
      overflow: hidden;
      position: absolute;
      top: 2px;
      width: calc(100% - 4px);
    }
    .fill-second {
      transform: translateY(41px);
      transition: transform 300ms;
    }
    .fill-second-zigzag {
      background-repeat: repeat-x;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 32px;
    }
    .fill-second-zigzag1 {
      background: linear-gradient(-45deg, #000 16px, transparent 0),
        linear-gradient(45deg, #000 16px, transparent 0);
      background-position: 5px 0;
      background-repeat: repeat-x;
      background-size: 32px 32px;
    }
    .fill-second-rect1 {
      background: #000;
      height: 50px;
      width: 100%;
    }
    .fill-second-zigzag2 {
      background: linear-gradient(-45deg, #ff1ead 16px, transparent 0),
        linear-gradient(45deg, #ff1ead 16px, transparent 0);
      background-position: 3px 3px;
      background-repeat: repeat-x;
      background-size: 32px 32px;
    }
    .fill-second-rect2 {
      background: #ff1ead;
      height: 50px;
      width: 100%;
    }
    .fill-second-zigzag3 {
      background: linear-gradient(-45deg, #fff 16px, transparent 0),
        linear-gradient(45deg, #fff 16px, transparent 0);
      background-position: 3px 7px;
      background-repeat: repeat-x;
      background-size: 32px 32px;
    }
    .fill-second-rect3 {
      background: #fff;
      height: 50px;
      width: 100%;
    }
    .text-input:focus ~ .clip-second-outer .fill-second,
    .text-input:not(:placeholder-shown) ~ .clip-second-outer .fill-second {
      transform: translateY(-32px);
    }
    .text-input:focus ~ .clip-second-inner .fill-second,
    .text-input:not(:placeholder-shown) ~ .clip-second-inner .fill-second {
      transform: translateY(-32px);
    }
  }
`;
ZigZagInput.propTypes = {
  htmlNameForInput: PropTypes.string.isRequired,
  inputValue: PropTypes.any.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputLabelText: PropTypes.string,
  htmlIdForInput: PropTypes.string
};
ZigZagInput.defaultProps = {
  inputLabelText: ``
};
