import styled from "styled-components";
import { lighten, darken } from "polished";
import * as c from './colors.styled.js'

export const Button = styled.button`
  outline-style: none;
  border-style: none;
  background: ${(props) => props.bg ? props.bg : "BlueViolet"};
  background: ${(props) => props.bg || "BlueViolet"};
  background: ${({bg}) => bg || "BlueViolet"};
  text-transform: uppercase;
  color: white;
  font-size: 2.8rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: "Yanone Kaffeesatz", sans-serif;

&:hover {
  background: ${({bg}) => lighten(0.1, bg || "BlueViolet")};
}
&:active {
  background: ${({bg}) => darken(0.1, bg || "BlueViolet")};
}
`;

export const Button2 = styled(Button)`
  border-radius: 0%;
  border: 2px solid white;
`;