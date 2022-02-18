import styled from "styled-components";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { useQuery } from "react-query";
import { getGitHubUser } from "../services/gitHubUser";
import { useState } from "react";
import { Card } from "../components/Card";

interface IProps {
  toggleTheme(): void;
}

export const Home = ({ toggleTheme }: IProps) => {
  const [dataUserGitHub, setDataUserGitHub] = useState({});

  const { isLoading, error } = useQuery(
    "indicators",
    () => getGitHubUser("octocat"),
    {
      onSuccess: (data) => {
        setDataUserGitHub(data);
      },
    }
  );

  return (
    <Container>
      <Content>
        <Header toggleTheme={toggleTheme}></Header>
        <SearchBar />
        <Card dataUserGitHub={dataUserGitHub} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 730px;
  max-width: 730px;
`;
