import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono';
    outline: none
}

body{
    background: ${(props) => props.theme.colors.background};
    transition: ${(props) => props.theme.transition};
    padding: 24px;
}
`;
