import { createGlobalStyle } from "styled-components";
import { ThemeName } from "./theme";
import "sanitize.css";

interface Props {
	themeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle<Props>`
  body{
    padding: 0;
    margin: 0;
    background : ${(props) => (props.themeName === "light" ? "light" : "black")}
  }

  h1{
    margin: 0;
  }

  * {
    color:${(props) => (props.themeName === "light" ? "black" : "white")}
  }
`;
