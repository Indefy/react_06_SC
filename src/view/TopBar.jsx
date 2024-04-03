import React from "react";
import styled, { keyframes } from "styled-components";
import { lighten, darken } from "polished";
import { Button, Button2 } from '../styles/buttons.styled.js'
import * as c from '../styles/colors.styled.js'
import { flexCenter } from '../styles/mixins.styled.js'

const TopBar =  ({ children }) => (
  <Div >
    <h1>{children}</h1>
    <Button >Click me</Button>
    <Button2 bg={ c.primary }>Click me</Button2>
    <Button bg={ c.secondary }>Click me</Button>
    <Button2 bg={ c.err }>Click me</Button2>
    <img className="logo" src="icons/logo.svg" alt="logo" />
  </Div>
);
export default TopBar;
  const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

const Div = styled.div`
  background: slategray;
  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  /*
  display: flex;
  align-items: center;
  justify-content: space-around;
  */
  ${flexCenter({jc: 'space-around'})}

  h1 {  
    font-size: 3rem;
    font-weight: normal;
    font-family: "Griffy", cursive;
    color: papayawhip;
  }

  img.logo {
    height: 5rem;
    animation: ${spin} 2s linear infinite;
  }
  `;
