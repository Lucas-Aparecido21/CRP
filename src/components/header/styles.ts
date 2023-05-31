import styled from "styled-components";

export const ContainerGeral = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 65px;
  background-color: ${(props) => props.theme["blue-dark"]};
`;

export const ContainerConteudo = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonHome = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  gap: 8px;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  :hover {
    color: black;
  }
`;

export const ButtonUser = styled.button`
  all: unset;
  font-size: 28px;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  :hover {
    color: black;
  }
`;
