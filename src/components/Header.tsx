import { Moon } from "../assets/Moon";
import { Sun } from "../assets/Sun";
import styled, { DefaultTheme } from "styled-components";

interface IProps {
  toggleTheme(): void;
  theme: DefaultTheme;
}

export const Header = ({ toggleTheme, theme }: IProps) => {
  const toggleIcons = () => {
    toggleTheme();
    localStorage.setItem("themePresent", JSON.stringify(theme));
  };
  return (
    <ContainerHeader>
      <h1>devfinder</h1>
      <button onClick={toggleIcons}>
        {theme.title === "light" ? (
          <>
            <h4>LIGHT</h4>
            <Sun />
          </>
        ) : (
          <>
            <h4>DARK</h4>
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
    color: ${(props) => props.theme.colors.highlightedText};
  }
  button {
    display: flex;
    color: ${(props) => props.theme.colors.secondary};
    background: transparent;
    border: none;

    svg {
      fill: ${(props) => props.theme.colors.secondary};
    }

    h4 {
      margin-right: 16px;
      font-size: 13px;
      letter-spacing: 3px;
      color: ${(props) => props.theme.colors.secondary};
    }

    &:hover {
      cursor: pointer;
      svg {
        fill: ${(props) => props.theme.colors.highlightedText};
      }

      h4 {
        color: ${(props) => props.theme.colors.highlightedText};
      }
    }
  }
`;
