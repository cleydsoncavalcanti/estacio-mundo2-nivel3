import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";

const App = () => {
  return (
    <Router>
      <nav className="nav nav-pills nav-fill">
        <Link
          to="/livros"
          className="nav-item nav-link active"
        >
          Catálogo de Livros
        </Link>
        <Link to="/livro/1" className="nav-item nav-link">
          Novo
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/livros" element={<LivroLista />} />
        <Route path="/livro/:id" element={<LivroDados />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
