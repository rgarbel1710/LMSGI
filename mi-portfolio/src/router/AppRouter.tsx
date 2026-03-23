import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SobreMi from "../pages/SobreMi";
import Habilidades from "../pages/Habilidades";
import Estudios from "../pages/Estudios";
import Trabajos from "../pages/Trabajos";
import Formacion from "../pages/Formacion";
import Contacto from "../pages/Contacto";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
