import { Header } from "../../components/header";
import {
  ContainerConteudo,
  ContainerGeral,
  DivListaTitulo,
  DivTitulo,
} from "./styles";

export function Pedidos() {
  return (
    <>
      <Header />
      <ContainerGeral>
        <ContainerConteudo>
          <DivTitulo>
            <h1>Pedidos</h1>
            <button>Novo pedido</button>
          </DivTitulo>
          <DivListaTitulo>
            <p>Código pedido</p>
            <p>cliente</p>
            <p>Valor total</p>
          </DivListaTitulo>
        </ContainerConteudo>
      </ContainerGeral>
    </>
  );
}
