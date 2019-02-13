import React from "react";
import styled from "styled-components";
import "./glowcardOG.scss";

export default function GlowCardOG() {
  return (
    <BlackWrapper>
      <div id="glowcard-container">
        <div class="myview">
          <ul>
            {" "}
            <li>UI/UX</li> <li>UI/UX</li> <li>UI/UX</li>
          </ul>
        </div>
      </div>
    </BlackWrapper>
  );
}
const BlackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #000;
  position: relative;
  z-index: 1;
`;
