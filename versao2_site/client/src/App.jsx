import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Sobre } from "./pages/Sobre";
import { Colaboradores } from "./pages/Colaboradores";
import { ImpactoSocial } from "./pages/ImpactoSocial";
import { Marcas } from "./pages/Marcas";
import { Segmento } from "./pages/Segmento";
import { Login} from "./pages/Login"
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Eventos } from "./pages/Eventos";
import '/styleguide.css';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/colaboradores" element={<Colaboradores />} />
      <Route path="/impacto-social" element={<ImpactoSocial />} />
      <Route path="/marcas" element={<Marcas />} />
      <Route path="/segmento" element={<Segmento />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/eventos" element={<Eventos />} />
      
    </Routes>
  );
};

export default App;
