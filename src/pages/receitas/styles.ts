import styled from "styled-components";

export const ContainerGeral = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const ContainerConteudo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const DivTitulo = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  justify-content: space-between;

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 800;
  }

  button {
    all: unset;
    width: 15%;
    display: flex;
    cursor: pointer;
    border-radius: 99px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme["blue-dark"]};
    font-family: "Poppins", sans-serif;
    color: white;

    :hover {
      background-color: ${(props) => props.theme["blue-dark-hover"]};
    }
  }
`;

export const DivListaTitulo = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  justify-content: space-between;

  p {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
  }
`;
