import Editora from '../modelo/Editora.js';

const editoras: Array<Editora> = [
    new Editora(1, 'Editora A'),
    new Editora(2, 'Editora B'),
    new Editora(3, 'Editora C'),
    // Adicione mais editoras aqui, se necessário
  ];

  class ControleEditora {
    getNomeEditora(codEditora: number): string | undefined {
      const editoraEncontrada = editoras.find(editora => editora.codEditora === codEditora);
      return editoraEncontrada ? editoraEncontrada.nome : undefined;
    }
  
    getEditoras(): Array<Editora> {
      return editoras;
    }
  }
  
  export default ControleEditora;