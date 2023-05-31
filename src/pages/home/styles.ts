import styled from "styled-components";

export const ContainerGeral = styled.div`
  width: 100vw;
  height: 550px;
  display: flex;
  justify-content: center;
`;

export const ContainerConteudo = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  align-items: center;
`;

export const DivReceitas = styled.button`
  all: unset;
  cursor: pointer;
  box-shadow: 1px 1px 6px 1px gray;
  width: 380px;
  gap: 8px;
  height: 220px;
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  :hover {
    color: ${(props) => props.theme["blue-dark"]};
  }
`;

export const DivPedidos = styled.button`
  all: unset;
  cursor: pointer;
  box-shadow: 1px 1px 6px 1px gray;
  width: 380px;
  gap: 8px;
  height: 220px;
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  :hover {
    color: ${(props) => props.theme["blue-dark"]};
  }
`;

export const DivClientes = styled.button`
  all: unset;
  cursor: pointer;
  box-shadow: 1px 1px 6px 1px gray;
  width: 380px;
  gap: 8px;
  height: 220px;
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  :hover {
    color: ${(props) => props.theme["blue-dark"]};
  }
`;
