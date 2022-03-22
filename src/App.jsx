import "./App.css";
import { useState } from "react";

function Formulario({ adicionarItem }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("1");
  
  return (
    <form className="form-add-item" onSubmit={ (event) => {event.preventDefault(); adicionarItem(nome, quantidade); setNome(""); setQuantidade("1")}} action="" method="post" >
      <fieldset>
        <div className="form-group mb-3">
          <label htmlFor="item">Adicionar Novo Item na Lista:</label>
          <input type="text" className="form-control" id="produto" value={nome} onChange={(event) => setNome(event.target.value)} required/>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="item">Quantidade:</label>
          <input type="number" className="form-control" id="qtde" value={quantidade} onChange={(event) => setQuantidade(event.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </fieldset>
    </form>
  );
}

function ListaItens({itens = []}){
  return(
    <div className="lista-compras-container">
      <ul className="lista-items">
        {itens.length === 0 ? (
        <li className="empty">Nenhum item adicionado</li>
        ) : (
        itens.map((produto) => (
          <li>{produto.nome} - {produto.quantidade}</li>
        )))}
      </ul>
    </div>
  );
}

function App() {
  const [itens, setItens] = useState([]);

  function adicionarItem(nome, quantidade){
    setItens([...itens, {nome, quantidade}]);
    console.log(itens);
  }

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>      
    <ListaItens itens={itens} />
    <Formulario adicionarItem={adicionarItem} />
    </div>
  );
}

export default App;
