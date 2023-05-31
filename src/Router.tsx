import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Receitas } from "./pages/receitas";
import { Pedidos } from "./pages/pedidos";
import { Clientes } from "./pages/clientes";
import { CadastroReceita } from "./pages/receitas/components/cadastroReceita";
import { CadastroCliente } from "./pages/clientes/components/cadastroCliente";
import { AlterarCliente } from "./pages/clientes/components/alterarCliente";
import { ConsultaCliente } from "./pages/clientes/components/consultaCliente";
import { AlterarReceita } from "./pages/receitas/components/alterarReceita";
import { ConsultaReceita } from "./pages/receitas/components/consultaReceita";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/receitas" element={<Receitas />} />
      <Route path="/cadastro-receita" element={<CadastroReceita />} />
      <Route path="/alterar-receita" element={<AlterarReceita />} />
      <Route path="/consulta-receita" element={<ConsultaReceita />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/cadastro-cliente" element={<CadastroCliente />} />
      <Route path="/alterar-cliente" element={<AlterarCliente />} />
      <Route path="/consulta-cliente" element={<ConsultaCliente />} />
    </Routes>
  );
}
