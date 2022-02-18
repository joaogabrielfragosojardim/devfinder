import styled from "styled-components";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";

interface IProps {
  toggleTheme(): void;
}

export const Home = ({ toggleTheme }: IProps) => {
  return (
    <Container>
      <Content>
        <Header toggleTheme={toggleTheme}></Header>
        <SearchBar />
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
  min-width: 730px;
`;
