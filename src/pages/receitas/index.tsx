import { Header } from "../../components/header";
import {
  ContainerConteudo,
  ContainerGeral,
  DivListaTitulo,
  DivTitulo,
} from "./styles";
import { NavLink } from "react-router-dom";

export function Receitas() {
  return (
    <>
      <Header />
      <ContainerGeral>
        <ContainerConteudo>
          <DivTitulo>
            <h1>RECEITAS</h1>
            <NavLink
              to="/cadastro-receita"
              style={{
                textDecoration: "none",
              }}>
              <button>Nova receita</button>
            </NavLink>
          </DivTitulo>
          <DivListaTitulo>
            <p>Código receita</p>
            <p>Nome</p>
            <p>Valor</p>
          </DivListaTitulo>
        </ContainerConteudo>
      </ContainerGeral>
    </>
  );
}
