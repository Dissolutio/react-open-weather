import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const child1 = keyframes`
    0%, 50%, 100% {
        filter: blur(5px);
    }
    25%, 75% {
        filter: blur(1px);
    }
`;

const child2 = keyframes`
    0% {
        filter: blur(4px);
    }
    50% {
        filter: blur(1px);
    }
    100% {
        filter: blur(4px);
    }
`;
export default class GlowList extends Component {
  render() {
    return (
      <StyledGlowList>
        <li>UI/UX</li>
        <li>UI/UX</li>
        <li>UI/UX</li>
      </StyledGlowList>
    );
  }
}
const StyledGlowList = styled.div`
  font-family: "Kalam", cursive;
  font-size: 5rem;
  list-style: none;
  position: relative;
  li:nth-child(1) {
    color: #0000ff;
    filter: blur(5px);
    animation: ${child1} 4s alternate infinite;
  }
  li:nth-child(2) {
    color: #00ffff;
    filter: blur(4px);
    animation: ${child2} 4s alternate infinite;
  }

  li:nth-child(3) {
    color: #000;
    filter: blur(0px);
  }
`;
