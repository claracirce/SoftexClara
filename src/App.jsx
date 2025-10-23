import React, { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [logado, setLogado] = useState(false);

  const handleEntrar = () => {
    if (nome.trim() === '') {
      alert('O nome é obrigatótio!');
      return;
    }
    setLogado(true);
  };
  const handleSair = () => {
    setNome('');
    setLogado(false);
  };
  return (
    <div className='container'>
      {!logado ? (
        <div className='login'>
          <h2>Digite seu nome:</h2>
          <input 
          type="text"
          value={nome} 
          onChange={(e) => setNome(e.target.value)}
          placeholder='Seu nome'
          />
          <button onClick={handleEntrar}>Entrar</button>
        </div>
      ) : (
        <div className='boas-vindas'>
          <h2>Bem-vindo(a), {nome}!</h2>
          <button onClick={handleSair}>Sair</button>
          </div>
      )}
    </div>
  );
}

export default App;
