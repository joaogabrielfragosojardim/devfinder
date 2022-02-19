import styled from "styled-components";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const Card = ({ dataUserGitHub }: any) => {
  console.log(dataUserGitHub);
  const dateFormated = new Date(dataUserGitHub.created_at);

  const day = dateFormated.getDay();
  let month =
    dataUserGitHub.created_at &&
    format(new Date(dataUserGitHub.created_at), "LLL", { locale: ptBR });
  month = month && month[0].toUpperCase() + month[1] + month[2];
  const year = dateFormated.getFullYear();

  const date = `Joined ${day < 9 ? "0" + day : day} ${month} ${year}`;

  const name = dataUserGitHub.name ? dataUserGitHub.name : dataUserGitHub.login;
  const login = dataUserGitHub.login ? `@${dataUserGitHub.login}` : "undefined";
  const bio = dataUserGitHub.bio
    ? dataUserGitHub.bio
    : "This profile has no bio";

  return (
    <ContainerCard>
      <ContainerProfileImage>
        <img src={dataUserGitHub.avatar_url} alt="gitHub profile"></img>
      </ContainerProfileImage>
      <ContainerInfos>
        <div>
          <ContentNameDate>
            <h1>{name}</h1>
            <span>{date}</span>
          </ContentNameDate>
        </div>
        <span>{login}</span>
        <p>{bio}</p>
        <UserInfos>
          <div>
            <h4>Repos</h4>
            <h2>{dataUserGitHub.public_repos}</h2>
          </div>
          <div>
            <h4>Followers</h4>
            <h2>{dataUserGitHub.followers}</h2>
          </div>
          <div>
            <h4>Following</h4>
            <h2>{dataUserGitHub.following}</h2>
          </div>
        </UserInfos>
      </ContainerInfos>
    </ContainerCard>
  );
};

export const ContainerCard = styled.div`
  margin-top: 24px;
  background: ${(props) => props.theme.colors.card};
  padding: 48px;
  transition: ${(props) => props.theme.transition};
  display: flex;
  justify-content: space-between;
  border-radius: 15px;

  h1 {
    color: ${(props) => props.theme.colors.highlightedText};
    transition: ${(props) => props.theme.transition};
  }
`;

export const ContainerProfileImage = styled.div`
  width: 200px;

  img {
    width: 117px;
    border-radius: 50%;
  }
`;

export const ContainerInfos = styled.div`
  width: 100%;

  span {
    color: ${(props) => props.theme.colors.primary};
    transition: ${(props) => props.theme.transition};
    font-size: 16px;
  }
  p {
    font-size: 15px;
    color: ${(props) => props.theme.colors.text};
    transition: ${(props) => props.theme.transition};
    margin-top: 20px;
  }
`;

export const ContentNameDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.text};
    transition: ${(props) => props.theme.transition};
  }
`;

export const UserInfos = styled.div`
  background: ${(props) => props.theme.colors.background};
  transition: ${(props) => props.theme.transition};
  padding: 15px;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  margin-top: 32px;

  h2 {
    color: ${(props) => props.theme.colors.highlightedText};
    transition: ${(props) => props.theme.transition};
  }

  h4 {
    color: ${(props) => props.theme.colors.text};
    transition: ${(props) => props.theme.transition};
  }
`;
