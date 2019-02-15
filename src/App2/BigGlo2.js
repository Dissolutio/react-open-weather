import React, { Component } from "react";
import styled from "styled-components";
import "./big-glo-button.css";

export default function BigGlo2({ onButtonClick, glowButtonOn }) {
  return (
    <GlowButtonBackground>
      <GlowButton
        onClick={onButtonClick}
        type="submit"
        className={`${glowButtonOn ? "glow-btn-on" : ""}`}>
        go
      </GlowButton>
    </GlowButtonBackground>
  );
}

const GlowButton = styled.button`
  font-family: "Audiowide", Arial, sans-serif;
  font-size: calc(5rem + 2vw);
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  width: 80%;
  height: 3em;
  color: #222;
  background-color: #bdbdbd;
  outline: none;
  border: none;
  border-bottom: 0.12em solid #999;
  border-radius: 0.5em;
  cursor: pointer;
  transform: rotateX(20deg);
  transition: border-bottom-width 500ms, transform 500ms, color 700ms 100ms,
    background-color 700ms 100ms, border-bottom-color 700ms 100ms,
    box-shadow 700ms 100ms;
  &:.glow-btn-on {
    color: red;
  }
`;
const GlowButtonBackground = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  padding: 1.5em;
  perspective: 400px;
  transition: background-color 200ms;
`;