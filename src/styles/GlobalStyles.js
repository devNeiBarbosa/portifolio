import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    list-style-type: none;
    color: #fff;
    overflow-x: none;
    }

    a {
    text-decoration: none;
    color: inherit; 
    }

    body {
        background-color: #000;
    }
`;

export default GlobalStyle