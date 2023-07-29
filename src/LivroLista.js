import React, { useState, useEffect } from 'react';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const LinhaLivro = ({ livro, excluir }) => {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr className=''>
      <td className='mx-2 my-3 px-3 d-flex flex-wrap'>
        {livro.título}
        <br />
        <button className='btn btn-danger' onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
      <td className='mx-2 my-3 px-3'>{livro.resumo}</td>
      <td className='mx-2 my-3 px-3'>{nomeEditora}</td>
      <td className='mx-2 my-3 px-3'>
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
      <h1>Catálogo de Livros</h1>
      <table className='table table-striped'>
        <thead className="thead-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
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