import { ClientePropsViaCep } from "../@types/Cliente";
import xhr from "./xhr";
import { AxiosPromise } from "axios";

/* CLIENTES */

/* CLIENTES */

/* PEDIDOS */

/* PEDIDOS */

/* ITENS DO PEDIDO*/
/* ITENS DO PEDIDO*/

/* UTILITÁRIOS*/
const viaCep = (cep: string): AxiosPromise<ClientePropsViaCep> =>
  xhr.get(`https://viacep.com.br/ws/${cep}/json/`);
/* UTILITÁRIOS*/

export { viaCep };
