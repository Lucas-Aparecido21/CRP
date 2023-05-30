import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Receitas } from "./pages/receitas";
import { Pedidos } from "./pages/pedidos";
import { Clientes } from "./pages/clientes";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/receitas" element={<Receitas />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/clientes" element={<Clientes />} />
    </Routes>
  );
}
