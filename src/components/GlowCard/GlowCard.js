import React from "react";
import styled, { keyframes } from "styled-components";
import GlowList from "./GlowList";

export default function GlowCard() {
  const GlowCard = styled.div`
    border-radius: 8px;
    position: relative;
    margin: 70px auto 0;
    width: 400px;
    height: 400px;
    background-image: linear-gradient(-45deg, #000, #111);
    text-align: center;
    :before,
    :after {
      content: "";
      border-radius: 10px;
      position: absolute;
      left: -2px;
      top: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      background-image: linear-gradient(
        45deg,
        #ff0000,
        #ffff00,
        #00ff00,
        #0000ff,
        #00ffff
      );
      background-size: 400%;
      z-index: -1;
      animation: ${move} 10s alternate infinite;
    }
    :after {
      filter: blur(10px);
    }
  `;
  return (
    <GlowCard>
      <GlowList />
    </GlowCard>
  );
}
const move = keyframes`
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 100% 0;
    }
    100% {
        background-position: 0 0;
    }
`;
