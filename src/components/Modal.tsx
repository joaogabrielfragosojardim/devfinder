import styled from "styled-components";

export const Modal = () => {
  return (
    <ModalContainer>
      <div>
        <img src={"loading.gif"} alt="loading"></img>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #29292971;

  div {
    background: ${(props) => props.theme.colors.card};
    box-shadow: ${(props) => props.theme.shadow};
    border-radius: 15px;
    text-align: center;
    padding: 50px;
    img {
      width: 50%;
    }
  }
`;
