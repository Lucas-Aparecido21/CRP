export interface ClientePropsViaCep {
  cpf: string;
  cep: string;
  localidade: string;
  telefone: string;
  complemento?: string | undefined;
  nome: string;
  logradouro: string;
  uf: string;
  bairro: string;
  numero: string;
}
