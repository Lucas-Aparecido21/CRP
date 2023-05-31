import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../../../components/header";
import { useNavigate } from "react-router-dom";
import React, { useState, ChangeEvent } from "react";
import {
  ContainerConteudo,
  ContainerTitulo,
  DivConteudo,
  DivSeparador,
  DivTitulo,
  InputBairro,
  InputCelular,
  InputCep,
  InputCidade,
  InputEmail,
  InputNome,
  InputNumero,
  InputRua,
} from "./styles";

export function CadastroCliente() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target.value;
    const formattedInput = input.replace(/\D/g, "");
    const formattedPhoneNumber = formattedInput.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    );
    setPhoneNumber(formattedPhoneNumber);
  };

  const navigate = useNavigate();
  function voltar() {
    navigate(-1);
  }

  return (
    <>
      <Header />
      <ContainerTitulo>
        <DivTitulo>
          <button onClick={voltar}>
            <FontAwesomeIcon icon={faArrowLeftLong} />
            Voltar
          </button>
          <h1>Cadastro de Cliente</h1>
        </DivTitulo>
      </ContainerTitulo>
      <ContainerConteudo>
        <DivConteudo>
          <p>Nome do cliente</p>
          <InputNome placeholder="Ex: Jóse da Silva" />
          <p>Celular</p>
          <InputCelular
            placeholder="(99) 12345-6789"
            value={phoneNumber}
            onChange={handleInputChange}
          />
          <p>Email</p>

          <InputEmail placeholder="Ex: email@email.com.br" />
          <p>CEP</p>
          <InputCep placeholder="(Somente numeros)" />
          <DivSeparador>
            <div>
              <p>Rua</p>
              <InputRua placeholder="Ex: Rua exemplo" />
            </div>
            <div>
              <p>Numero</p>
              <InputNumero />
            </div>
          </DivSeparador>
          <DivSeparador>
            <div>
              <p>Bairro</p>
              <InputBairro />
            </div>
            <div>
              <p>Cidade</p>
              <InputCidade />
            </div>
          </DivSeparador>
        </DivConteudo>
      </ContainerConteudo>
    </>
  );
}
