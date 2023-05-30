import { Header } from "../../components/header";
import {
  ContainerConteudo,
  ContainerGeral,
  DivListaTitulo,
  DivTitulo,
} from "./styles";

export function Receitas() {
  return (
    <>
      <Header />
      <ContainerGeral>
        <ContainerConteudo>
          <DivTitulo>
            <h1>RECEITAS</h1>
            <button>Nova receita</button>
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
