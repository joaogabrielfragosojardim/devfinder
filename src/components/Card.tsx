import styled from "styled-components";
import { Location } from "../assets/Location";
import { Twitter } from "../assets/Twitter";
import { Link } from "../assets/Link";
import { Company } from "../assets/Company";
import { IDataGitHub } from "../pages/Home";

interface IBIO {
  bio?: string;
}

interface ISocial {
  social?: string;
}

interface IProps {
  dataUserGitHub: IDataGitHub;
}

export const Card = ({ dataUserGitHub }: IProps) => {
  return (
    <ContainerCard>
      <ContainerProfileImage>
        <img src={dataUserGitHub.avatar_url} alt="gitHub profile"></img>
      </ContainerProfileImage>
      <ContentNameDate>
        <h1>{dataUserGitHub.name}</h1>
        <span>{dataUserGitHub.created_at}</span>
      </ContentNameDate>
      <span>{dataUserGitHub.login}</span>
      <Bio bio={dataUserGitHub.bio}>{dataUserGitHub.bio}</Bio>
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
      <SocialMedia>
        <LocationDiv social={dataUserGitHub.location}>
          <Location />
          <h4>{dataUserGitHub.location}</h4>
        </LocationDiv>
        <TwitterDiv social={dataUserGitHub.twitter_username}>
          <Twitter />
          <h4>{dataUserGitHub.twitter_username}</h4>
        </TwitterDiv>
        <LinkDiv social={dataUserGitHub.blog}>
          <Link />
          <a href={dataUserGitHub.websiteLink} target="blank" rel="noreferrer">
            {dataUserGitHub.blog}
          </a>
        </LinkDiv>
        <CompanyDiv social={dataUserGitHub.company}>
          <Company />
          <h4>{dataUserGitHub.company}</h4>
        </CompanyDiv>
      </SocialMedia>
    </ContainerCard>
  );
};

const ContainerCard = styled.div`
  margin-top: 24px;
  background: ${(props) => props.theme.colors.card};
  padding: 48px;
  display: grid;
  grid-template-areas:
    "profileImg nameDate nameDate"
    "profileImg userTag userTag"
    "profileImg bio bio"
    "profileImg infos infos"
    "profileImg social social";

  justify-content: space-between;
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.shadow};

  h1 {
    color: ${(props) => props.theme.colors.highlightedText};
  }

  span {
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px;
  }
  p {
    font-size: 15px;
    color: ${(props) => props.theme.colors.text};
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "profileImg nameDate nameDate"
      "profileImg userTag userTag"
      "bio bio bio"
      "infos infos infos"
      "social social social";
  }
`;

const ContainerProfileImage = styled.div`
  grid-area: profileImg;
  width: 100%;
  margin-right: 30px;
  img {
    width: 117px;
    border-radius: 50%;
  }

  @media screen and (max-width: 630px) {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70px;
    }
  }
`;

const ContentNameDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: nameDate;

  span {
    color: ${(props) => props.theme.colors.text};
    grid-area: userTag;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: 100%;

    span {
      font-size: 13px;
    }
  }
`;

const Bio = styled.p<IBIO>`
  opacity: ${(props) => (props.bio !== "This profile has no bio" ? 1 : 0.75)};
  grid-area: bio;

  @media screen and (max-width: 375px) {
    font-size: 13px;
  }
`;

const UserInfos = styled.div`
  background: ${(props) => props.theme.colors.background};
  padding: 15px;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  margin-top: 32px;
  grid-area: infos;

  h2 {
    font-weight: bold;
    color: ${(props) => props.theme.colors.highlightedText};
  }

  h4 {
    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
  }
`;

const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 40px;
  gap: 20px;
  grid-area: social;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 16px;
    width: 25px;
    fill: ${(props) => props.theme.colors.text};
  }

  h4 {
    font-weight: 400;
    font-size: 15px;
    color: ${(props) => props.theme.colors.text};
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const LocationDiv = styled.div<ISocial>`
  opacity: ${(props) => (props.social !== "Not Available" ? 1 : 0.75)};
`;

const TwitterDiv = styled.div<ISocial>`
  opacity: ${(props) => (props.social !== "Not Available" ? 1 : 0.75)};
`;

const LinkDiv = styled.div<ISocial>`
  opacity: ${(props) => (props.social !== "Not Available" ? 1 : 0.75)};
  word-break: break-all;
  a {
    font-weight: 400;
    font-size: 15px;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;

    &:hover {
      text-decoration: ${(props) =>
        props.social !== "Not Available" ? "underline" : "none"};
      cursor: ${(props) =>
        props.social !== "Not Available" ? "pointer" : "default"};
    }
  }
`;

const CompanyDiv = styled.div<ISocial>`
  opacity: ${(props) => (props.social !== "Not Available" ? 1 : 0.75)};
`;
