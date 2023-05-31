import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../../../components/header";
import { useNavigate } from "react-router-dom";
import React, { useState, ChangeEvent } from "react";
import {
  ContainerConteudo,
  ContainerTitulo,
  DivConteudo,
  DivTitulo,
  InputIngredientes,
  InputNome,
  InputPreparo,
  InputValor,
} from "./styles";

export function CadastroReceita() {
  const [value, setValue] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const rawValue = event.target.value.replace(/[^0-9]/g, "");
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(rawValue) / 100);
    setValue(formattedValue);
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
          <h1>Cadastro de Receitas</h1>
        </DivTitulo>
      </ContainerTitulo>
      <ContainerConteudo>
        <DivConteudo>
          <p>Nome da Receita</p>
          <InputNome placeholder="Ex: Bolo de chocolate 5KG" />
          <p>Valor</p>
          <InputValor
            placeholder="Ex: 120,00"
            value={value}
            onChange={handleInputChange}
          />
          <p>Ingredientes</p>

          <InputIngredientes placeholder="Ex: 2 ovos, 400ml de leite..." />
          <p>Modo de preparo</p>
          <InputPreparo placeholder="Ex: Adicione o leite em temperatura ambiente..." />
          <button>Cadastrar receita</button>
        </DivConteudo>
      </ContainerConteudo>
    </>
  );
}
