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
  InputUf,
} from "./styles";
import Swal from "sweetalert2";
import * as api from "../../../../services/api";

interface Cliente {
  cpf: string;
  nome: string;
  telefone: string;
  cep: string;
  rua: string;
  cidade: string;
  bairro: string;
  uf: string;
  numero: string;
  complemento?: string;
}

export function CadastroCliente() {
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
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

  const ConsultaCEP = async (event: any) => {
    const cep = event.target.value;

    if (cep.length < 8) {
      Swal.fire({
        icon: "error",
        title: "O CEP não pode ser menor que 8 caracteres",
        confirmButtonColor: "#007aff",
      });
      return;
    }

    if (cep.length > 8) {
      Swal.fire({
        icon: "error",
        title: "O CEP não pode ser maior que 8 caracteres",
        confirmButtonColor: "#007aff",
      });
      return;
    }

    try {
      const { data } = await api.viaCep(cep);

      setCliente({
        ...cliente,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        uf: data.uf,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "O CEP digitado não foi localizado!",
        confirmButtonColor: "#007aff",
      });
    }
  };

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
          <p>Celular</p>
          <InputCelular
            placeholder="(99) 12345-6789"
            value={phoneNumber}
            onChange={handleInputChange}
          />
          <p>Nome do cliente</p>
          <InputNome placeholder="Ex: Jóse da Silva" />

          <p>Email</p>

          <InputEmail placeholder="Ex: email@email.com.br" />
          <p>CEP</p>
          <InputCep placeholder="Somente numeros" onBlur={ConsultaCEP} />
          <DivSeparador>
            <div>
              <p>Rua</p>
              <InputRua placeholder="Ex: Rua exemplo" value={cliente.rua} />
            </div>
            <div>
              <p>Numero</p>
              <InputNumero placeholder="Ex: 123" value={cliente.numero} />
            </div>
          </DivSeparador>
          <DivSeparador>
            <div>
              <p>Bairro</p>
              <InputBairro
                placeholder="Ex: Bairro exemplo"
                value={cliente.bairro}
              />
            </div>
            <div>
              <p>Cidade</p>
              <InputCidade
                placeholder="Ex: Cidade exemplo"
                value={cliente.cidade}
              />
            </div>
            <div>
              <p>UF</p>
              <InputUf placeholder="Ex: SP" value={cliente.uf} />
            </div>
          </DivSeparador>
          <button>Confirmar Cadastro</button>
        </DivConteudo>
      </ContainerConteudo>
    </>
  );
}
