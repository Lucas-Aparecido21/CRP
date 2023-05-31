import styled from "styled-components";

export const ContainerTitulo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const DivTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  font-family: "Poppins", sans-serif;
  font-size: 18px;

  button {
    all: unset;
    width: 200px;
    height: 48px;
    display: flex;
    gap: 12px;
    cursor: pointer;
    border-radius: 99px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme["blue-dark"]};
    font-family: "Poppins", sans-serif;
    color: white;

    :hover {
      transition: 0.5s;
      background-color: ${(props) => props.theme["blue-dark-hover"]};
    }
  }
`;

export const ContainerConteudo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const DivConteudo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: "Poppins", sans-serif;
  font-size: 18px;

  button {
    all: unset;
    width: 400px;
    height: 48px;
    display: flex;
    gap: 12px;
    cursor: pointer;
    border-radius: 99px;
    align-self: center;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme["blue-dark"]};
    font-family: "Poppins", sans-serif;
    color: white;

    :hover {
      transition: 0.5s;
      background-color: ${(props) => props.theme["blue-dark-hover"]};
    }
  }
`;

export const InputBase = styled.textarea`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  border-radius: 12px;
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  resize: none;
  border: 2px solid black;

  :focus {
    outline: none;
    border-color: ${(props) => props.theme["blue-dark"]};
  }
`;

export const InputNome = styled(InputBase)`
  height: 50px;
`;

export const InputValor = styled(InputBase)`
  height: 50px;
`;

export const InputIngredientes = styled(InputBase)``;

export const InputPreparo = styled(InputBase)`
  height: 200px;
`;
