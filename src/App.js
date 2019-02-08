import React, { Component } from "react";
import styled from "styled-components";
import PlaceForm from "./Weather/PlaceForm";
import GlowCard from "./components/GlowCard/GlowCard";
import BigGloButton from "./components/BigGloButton/BigGloButton";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  font-family: sans-serif;
  font-size: 16px;
  background: #abbaab;
  background: linear-gradient(135deg, #ffffff, #abbaab);
`;
const BlackWrapper = styled.div`
  background-color: #000;
`;

class App extends Component {
  render() {
    return (
      <>
        <AppWrapper>
          <PlaceForm />
        </AppWrapper>
        <BlackWrapper>
          <GlowCard />
        </BlackWrapper>
        <BlackWrapper>
          <BigGloButton />
        </BlackWrapper>
      </>
    );
  }
}

export default App;
