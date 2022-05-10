import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope&family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-size: 10px;
    text-decoration: none;
    /* background-color: #f8f8f8; */
    background-color: red;
    font-family: 'Manrope', sans-serif;
  }

  body, #root {
    max-width: 100%;
    min-height: calc(100vh);

    -webkit-font-smoothing: antialiased;
  }



`;

export default GlobalStyles;
