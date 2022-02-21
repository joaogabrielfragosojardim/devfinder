import styled from "styled-components";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { useQuery } from "react-query";
import { getGitHubUser } from "../services/gitHubUser";
import { useState } from "react";
import { Card } from "../components/Card";
import { formatedDataAPI } from "../utils/formatedDataAPI";
import { Modal } from "../components/Modal";

interface IProps {
  toggleTheme(): void;
}

export interface IDataGitHub {
  name?: string;
  created_at?: Date;
  login?: string;
  bio?: string;
  location?: string;
  twitter_username?: string;
  blog?: string;
  company?: string;
  avatar_url?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
  websiteLink?: string;
}

export const Home = ({ toggleTheme }: IProps) => {
  const [dataUserGitHub, setDataUserGitHub] = useState<IDataGitHub>({});

  const { isLoading } = useQuery("gitHubUser", () => getGitHubUser("octocat"), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      const formatedData = formatedDataAPI(data);
      setDataUserGitHub(formatedData);
    },
  });

  if (isLoading) return <Modal />;

  return (
    <Container>
      <Content>
        <Header toggleTheme={toggleTheme}></Header>
        <SearchBar setDataUserGitHub={setDataUserGitHub} />
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

  @media screen and (max-width: 375px) {
    align-items: flex-start;
  }
`;

const Content = styled.div`
  width: 730px;
  max-width: 730px;

  @media screen and (max-width: 768px) {
    width: 573px;
    max-width: 573px;
  }

  @media screen and (max-width: 375px) {
    width: 327px;
    max-width: 327px;
  }
`;
