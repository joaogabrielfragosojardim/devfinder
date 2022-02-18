import { useState } from "react";

import { Moon } from "../assets/Moon";
import { Sun } from "../assets/Sun";
import styled from "styled-components";

interface IProps {
  toggleTheme(): void;
}

export const Header = ({ toggleTheme }: IProps) => {
  const [toggle, setToggle] = useState(false);

  const toggleIcons = () => {
    setToggle(!toggle);
    toggleTheme();
  };
  return (
    <ContainerHeader>
      <h1>devfinder</h1>
      <button onClick={toggleIcons}>
        {toggle ? (
          <>
            <h4>ligth</h4>
            <Sun />
          </>
        ) : (
          <>
            <h4>dark</h4>
            <Moon />
          </>
        )}
      </button>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    transition: ${(props) => props.theme.transition};
    color: ${(props) => props.theme.colors.highlightedText};
  }
  button {
    transition: ${(props) => props.theme.transition};
    display: flex;
    color: ${(props) => props.theme.colors.secondary};
    background: transparent;
    border: none;

    svg {
      transition: ${(props) => props.theme.transition};
      fill: ${(props) => props.theme.colors.secondary};
    }

    &:hover {
      color: ${(props) => props.theme.colors.highlightedText};
      cursor: pointer;
      svg {
        fill: ${(props) => props.theme.colors.highlightedText};
      }
    }
  }

  h4 {
    margin-right: 16px;
    font-size: 13px;
  }
`;
