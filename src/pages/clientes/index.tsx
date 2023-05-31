import { Header } from "../../components/header";
import {
  ContainerConteudo,
  ContainerGeral,
  DivListaTitulo,
  DivTitulo,
} from "./styles";

import { NavLink } from "react-router-dom";

export function Clientes() {
  return (
    <>
      <Header />
      <ContainerGeral>
        <ContainerConteudo>
          <DivTitulo>
            <h1>Clientes</h1>
            <NavLink to="/cadastro-cliente" style={{ textDecoration: "none" }}>
              <button>Novo cliente</button>
            </NavLink>
          </DivTitulo>
          <DivListaTitulo>
            <p>Código cliente</p>
            <p>Nome</p>
          </DivListaTitulo>
        </ContainerConteudo>
      </ContainerGeral>
    </>
  );
}
