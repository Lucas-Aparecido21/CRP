import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ContainerLogin = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivLogo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.theme["blue-dark"]};
    font-size: 56px;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 26px;
  }
`;

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  width: 60%;
  justify-content: center;

  h1 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    font-weight: 200;
    margin-top: 14px;
  }

  input {
    margin-top: 14px;
    height: 40px;
    border-radius: 12px;
    padding: 8px;

    :focus {
      outline: none;
      border-color: ${(props) => props.theme["blue-dark"]};
    }
  }
`;

export const ButtonLogin = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 99px;
  height: 45px;
  background-color: ${(props) => props.theme["blue-dark"]};
  color: ${(props) => props.theme.white};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-top: 18px;
  width: 100%;
  align-self: center;
  :hover {
    background-color: ${(props) => props.theme["blue-dark-hover"]};
  }
`;

export const ButtonEsqueceuSenha = styled.button`
  all: unset;
  margin-top: 12px;
  color: ${(props) => props.theme["blue-dark"]};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme["blue-dark-hover"]};
  }
`;
