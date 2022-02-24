import { Dispatch, SetStateAction, useState } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import { Search } from "../assets/Search";
import { IDataGitHub } from "../pages/Home";
import { getGitHubUser } from "../services/gitHubUser";
import { formatedDataAPI } from "../utils/formatedDataAPI";

interface IProps {
  setDataUserGitHub: Dispatch<SetStateAction<IDataGitHub>>;
}

interface IErros {
  error: boolean;
}

export const SearchBar = ({ setDataUserGitHub }: IProps) => {
  const [username, setUserName] = useState("");
  const [error, setError] = useState(false);

  const useMutationGit = useMutation(
    "gitHubUserInput",
    () => getGitHubUser(username),
    {
      onSuccess: (data) => {
        setError(false);
        const formatedData = formatedDataAPI(data);
        setDataUserGitHub(formatedData);
      },

      onError: () => {
        setError(true);
      },
    }
  );

  const handleSearch = () => {
    useMutationGit.mutate();
  };

  return (
    <ContainerSearchBar error={error}>
      <Search />
      <input
        placeholder="Search GitHub username..."
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        onKeyPress={(e) => e.key === "Enter" && useMutationGit.mutate()}
      ></input>
      <span>No results</span>
      <button onClick={handleSearch}>Search</button>
    </ContainerSearchBar>
  );
};

const ContainerSearchBar = styled.div<IErros>`
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.card};
  margin-top: 35px;
  height: 70px;
  padding: 9.5px 10px 9.5px 32px;
  box-shadow: ${(props) => props.theme.shadow};

  svg {
    fill: ${(props) => props.theme.colors.primary};
    margin-right: 15px;

    @media screen and (max-width: 375px) {
      display: none;
    }
  }
  input {
    width: 60%;
    border: none;
    height: 100%;
    background: ${(props) => props.theme.colors.card};
    color: ${(props) => props.theme.colors.highlightedText};
    font-size: 18px;
    caret-color: ${(props) => props.theme.colors.primary};
    ::placeholder {
      color: ${(props) => props.theme.colors.text};
    }

    @media screen and (max-width: 768px) {
      width: 50%;
      font-size: 16px;
    }

    @media screen and (max-width: 375px) {
      font-size: 13px;
    }
  }

  span {
    margin: 24px 0px;
    font-size: 15px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.danger};
    visibility: ${(props) => (props.error ? "visible" : "hidden")};

    @media screen and (max-width: 735px) {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

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
      filter: brightness(1.4);
    }
  }
`;
