import React, { useState, useEffect } from 'react';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const LinhaLivro = ({ livro, excluir }) => {
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
  
    return (
      <tr>
        <td>
          <button onClick={() => excluir(livro.codigo)}>Excluir</button>
        </td>
        <td>{livro.codigo}</td>
        <td>{nomeEditora}</td>
        <td>{livro.título}</td>
        <td>{livro.resumo}</td>
        <td>
          <ul>
            {livro.autores.map((autor, index) => (
              <li key={index}>{autor}</li>
            ))}
          </ul>
        </td>
      </tr>
    );
  };

  const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
    const controleLivro = new ControleLivro();
  
    useEffect(() => {
      const obterLivros = async () => {
        const listaLivros = controleLivro.obterLivros();
        setLivros(listaLivros);
        setCarregado(true);
      };
  
      obterLivros();
    }, [carregado]);
  
    const excluir = (codigo) => {
      controleLivro.excluir(codigo);
      setCarregado(false);
    };
  
    return (
      <main>
        <h1>Lista de Livros</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Código</th>
              <th>Editora</th>
              <th>Título</th>
              <th>Resumo</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </main>
    );
  };
  
  export default LivroLista;