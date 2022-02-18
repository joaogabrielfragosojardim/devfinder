import styled from "styled-components";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const Card = ({ dataUserGitHub }: any) => {
  const dateFormated = new Date(dataUserGitHub.created_at);

  const day = dateFormated.getDay();
  const month =
    dataUserGitHub.created_at &&
    format(new Date(dataUserGitHub.created_at), "LLL", { locale: ptBR });

  const year = dateFormated.getFullYear();

  return (
    <ContainerCard>
      <ContainerProfileImage>
        <img src={dataUserGitHub.avatar_url} alt="gitHub profile"></img>
      </ContainerProfileImage>
      <div>
        <div>
          <h1>{dataUserGitHub.name}</h1>
          <span>{`Joined ${day < 9 ? "0" + day : day} ${month} ${year}`}</span>
        </div>
      </div>
    </ContainerCard>
  );
};

export const ContainerCard = styled.div`
  margin-top: 24px;
  background: ${(props) => props.theme.colors.card};
  padding: 48px;
  transition: ${(props) => props.theme.transition};
  display: flex;
  border-radius: 15px;
  transition: ${(props) => props.theme.transition};

  h1 {
    font-size: 26px;
    color: ${(props) => props.theme.colors.highlightedText};
    transition: ${(props) => props.theme.transition};
  }
`;

export const ContainerProfileImage = styled.div`
  img {
    width: 117px;
    border-radius: 50%;
  }
`;
