import Box_main from "./components/TD_Componets/Box_main";
import Estudiantes from "./components/session/Estudiantes";
import Informacion from "./components/session/Informacion";
import Inscripciones from "./components/session/Inscripciones";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Box_header from "./components/TD_Componets/Box_header";
function App() {
  return (
    <div id="TD-conaints">
      <Box_header />
      <Routes>
        <Route path="/login" element={<Box_main />}></Route>
        <Route path="/Informacion" element={<Informacion />}></Route>
        <Route path="/Estudiantes" element={<Estudiantes />}></Route>
        <Route path="/Inscripciones" element={<Inscripciones />}></Route>
      </Routes>
    </div>
  );
}

export default App;
