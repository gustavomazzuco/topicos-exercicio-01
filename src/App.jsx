import "./App.css";
import React, { useState } from "react";

function ListaItens({itens = []}){
  return(
    <div className="lista-compras-container">
      <ul className="lista-items">
        {itens.length === 0 ? (
        <li className="empty">Nenhum item adicionado</li>
        ) : (
        itens.map((item) => (
          <li>{item}</li>
        )))}
      </ul>
    </div>
  );
}

function Formulario() {
  const [nome, setNome] = useState("");
  
  return (
    <form className="form-add-item" onSubmit={ (event) => {adicionarItem(nome);}} action="" method="post"  >
      <fieldset>
        <div className="form-group mb-3">
          <label htmlFor="item">Adicionar Novo Item na Lista:</label>
          <input type="text" className="form-control" id="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </fieldset>
    </form>
  );
}

function App() {
  const [itens, setItens] = useState([]);

  function adicionarItem(nome){
    setItens([...itens, nome])
  }

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>      
    <ListaItens itens={itens}/>
    <Formulario />
    </div>
  );
}

export default App;
