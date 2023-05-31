import {
  ButtonHome,
  ButtonUser,
  ContainerConteudo,
  ContainerGeral,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <ContainerGeral>
      <ContainerConteudo>
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          <ButtonHome>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </ButtonHome>
        </NavLink>
        <ButtonUser>
          <FontAwesomeIcon icon={faCircleUser} />
        </ButtonUser>
      </ContainerConteudo>
    </ContainerGeral>
  );
}
