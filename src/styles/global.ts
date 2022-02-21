import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono';
    outline: none;
    transition:  background-color ${(props) => props.theme.transition},  
    color ${(props) => props.theme.transition}
}

body{
    background: ${(props) => props.theme.colors.background};

    @media screen and (max-width: 768px) {
    padding: 0px 99px;
    }

    @media screen and (max-width: 375px) {
    padding: 31px 24px;
    }
}

h1 {
    font-size: 26px;

    @media screen and (max-width: 375px) {
        font-size: 16px;
    }
}

h2 {
    font-size: 22px;

    @media screen and (max-width: 375px) {
    font-size: 16px;
  }
}

h3 {
    font-size: 16px;
}

h4 {
    font-size: 13px;

    @media screen and (max-width: 375px) {
    font-size: 11px;
  }
}
`;
