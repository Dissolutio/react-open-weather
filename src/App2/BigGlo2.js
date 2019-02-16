import React from "react";
import styled from "styled-components";
export default function BigGlo2({ onButtonClick, glowButtonOn }) {
  return (
    <GlowButtonBackground>
      <GlowButton
        onClick={onButtonClick}
        type="submit"
        glowButtonOn={glowButtonOn}>
        go
      </GlowButton>
    </GlowButtonBackground>
  );
}

const GlowButton = styled.button`
  font-family: "Audiowide", Arial, sans-serif;
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  width: 80%;
  height: 10rem;
  outline: none;
  border: none;
  border-radius: 0.5em;
  background-color: ${props => (props.glowButtonOn ? "#3efa3e" : "#bdbdbd")};
  box-shadow: ${props =>
    props.glowButtonOn ? "0 0 1.4em rgba(50, 205, 50, 0.35)" : ""};
  border-bottom: ${props =>
    props.glowButtonOn ? "0.05em solid #2aa82a" : "0.12em solid #999"};
  color: ${props => (props.glowButtonOn ? "#121212" : "#222")};
  cursor: pointer;
  transform: rotateX(20deg);
  transition: border-bottom-width 500ms, transform 500ms, color 700ms 100ms,
    background-color 700ms 100ms, border-bottom-color 700ms 100ms,
    box-shadow 700ms 100ms;
`;
const GlowButtonBackground = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
  padding: 1rem;
  perspective: 400px;
  transition: background-color 200ms;
`;
