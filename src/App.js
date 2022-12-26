import Footer from "componentes/Footer";
import Padrao from "componentes/Padrao";
import Post from "componentes/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Padrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />

        </Route>
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
