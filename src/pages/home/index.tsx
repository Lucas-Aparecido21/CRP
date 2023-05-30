import { faBookOpen, faFile, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../components/header";
import {
  ContainerConteudo,
  ContainerGeral,
  DivClientes,
  DivPedidos,
  DivReceitas,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <Header />
      <ContainerGeral>
        <ContainerConteudo>
          <NavLink
            to="/receitas"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}>
            <DivReceitas>
              <FontAwesomeIcon icon={faBookOpen} />
              Receitas
            </DivReceitas>
          </NavLink>
          <NavLink
            to="/pedidos"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}>
            <DivPedidos>
              <FontAwesomeIcon icon={faFile} />
              Pedidos
            </DivPedidos>
          </NavLink>
          <NavLink
            to="/clientes"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}>
            <DivClientes>
              <FontAwesomeIcon icon={faUsers} />
              Clientes
            </DivClientes>
          </NavLink>
        </ContainerConteudo>
      </ContainerGeral>
    </>
  );
}
