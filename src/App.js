import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Carros from "./pages/Carros";
import Pilares from "./pages/Pilares";
import Contato from "./pages/Contato";

import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quemsomos" element={<QuemSomos />} />
        <Route path="carros" element={<Carros />} />
        <Route path="pilares" element={<Pilares />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
