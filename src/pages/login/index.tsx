import {
  ButtonEsqueceuSenha,
  ButtonLogin,
  ContainerLogin,
  ContainerPrincipal,
  DivLogin,
  DivLogo,
} from "./styles";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export function Login() {
  return (
    <ContainerPrincipal>
      <ContainerLogin>
        <DivLogo>
          <h1>CRP</h1>
          <p>Controle de Receitas e Pedidos</p>
        </DivLogo>

        <DivLogin>
          <h1>
            <FontAwesomeIcon icon={faUser} />
            Usuário
          </h1>
          <input type="text" title="login" />
          <h1>
            <FontAwesomeIcon icon={faLock} />
            Senha
          </h1>
          <input type="password" title="senha" />
          <ButtonEsqueceuSenha>Esqueceu a senha?</ButtonEsqueceuSenha>
          <NavLink to="/home" style={{ textDecoration: "none" }}>
            <ButtonLogin>Entrar</ButtonLogin>
          </NavLink>
        </DivLogin>
      </ContainerLogin>
    </ContainerPrincipal>
  );
}
