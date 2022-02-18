import styled from "styled-components";
import { Search } from "../assets/Search";

export const SearchBar = () => {
  return (
    <ContainerSearchBar>
      <Search />
      <input placeholder="Search GitHub username..."></input>
      <button>Search</button>
    </ContainerSearchBar>
  );
};

const ContainerSearchBar = styled.div`
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.card};
  margin-top: 35px;
  height: 69px;
  padding: 9.5px 10px 9.5px 32px;

  button {
    background: ${(props) => props.theme.colors.primary};
    border: none;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    width: 106px;
    height: 100%;
    &:hover {
      cursor: pointer;
    }
  }

  svg {
    fill: ${(props) => props.theme.colors.primary};
  }
  input {
    width: 75%;
    border: none;
    height: 100%;
    background: ${(props) => props.theme.colors.card};
    color: ${(props) => props.theme.colors.text};
    font-size: 18px;
    ::placeholder {
      color: ${(props) => props.theme.colors.text};
    }
  }
`;
