import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio } from "../paginas/Inicio";
import { Navbar } from "../components/Navbar";

export const Browser = () => {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </Navbar>
    </Router>
  );
};
