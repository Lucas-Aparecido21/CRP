import {
  ButtonHome,
  ButtonUser,
  ContainerConteudo,
  ContainerGeral,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
export function Header() {
  return (
    <ContainerGeral>
      <ContainerConteudo>
        <ButtonHome>
          <FontAwesomeIcon icon={faHouse} />
          Home
        </ButtonHome>
        <ButtonUser>
          <FontAwesomeIcon icon={faCircleUser} />
        </ButtonUser>
      </ContainerConteudo>
    </ContainerGeral>
  );
}
