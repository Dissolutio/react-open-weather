import React, { Component } from "react";
import styled from "styled-components";
import PlaceForm from "./Weather/PlaceForm";
import GlowCard from "./components/GlowCard/GlowCard";
import GlowCardOG from "./components/GlowCardOG/GlowCardOG";
import BigGloButton from "./components/BigGloButton/BigGloButton";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  font-family: sans-serif;
  font-size: 16px;
  background: #abbaab;
  background: linear-gradient(135deg, #ffffff, #abbaab);
`;

class App extends Component {
  render() {
    return (
      <>
        <AppWrapper>
          <PlaceForm />
        </AppWrapper>
        <GlowCardOG />
        <GlowCard />
        <BigGloButton />
      </>
    );
  }
}

export default App;
