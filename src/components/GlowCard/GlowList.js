import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export default class GlowList extends Component {
  render() {
    const GlowList = styled.div`
      font-family: "Kalam", cursive;
      font-size: 80px;
      list-style: none;
      position: relative;
      li {
        height: 0px;
      }
      li:nth-child(1) {
        color: #0000ff;
        filter: blur(10px);
        animation: ${child1} 4s alternate infinite;
      }
      li:nth-child(2) {
        color: #00ffff;
        filter: blur(5px);
        animation: ${child2} 4s alternate infinite;
      }

      li:nth-child(3) {
        color: #000;
        filter: blur(0px);
      }
    `;
    return (
      <GlowList>
        <li>UI/UX</li>
        <li>UI/UX</li>
        <li>UI/UX</li>
      </GlowList>
    );
  }
}
const child1 = keyframes`
    0%, 50%, 100% {
        filter: blur(3px);
    }
    25%, 75% {
        filter: blur(1px);
    }
`;

const child2 = keyframes`
    0% {
        filter: blur(3px);
    }
    50% {
        filter: blur(1px);
    }
    100% {
        filter: blur(3px);
    }
`;
