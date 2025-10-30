import React, { useState } from "react";
import "./App.css";

type Participante = {
  id: number;
  nome: string;
  idade: number;
};

type Filtro = "TODAS" | "MAIORES" | "MENORES";

const App: React.FC = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState<number | "">("");
  const [Participantes, setParticipantes] = useState<Participante[]>([]);
  const [filtro, setFiltro] = useState<Filtro>("TODAS");

  const handleAdicionar = () => {
    if (!nome || idade === "") return;
    const novoParticipante: Participante = {
      id: Date.now(),
      nome,
      idade: Number(idade),
    };
    setParticipantes([...Participantes, novoParticipante]);
    handleLimpar();
  };

  const handleLimpar = () => {
    setNome("");
    setIdade("");
  };

  const handleRemover = (id: number) => {
    setParticipantes(Participantes.filter((p) => p.id !== id));
  };
const total = Participantes.length;
const maiores = Participantes.filter((p) => p.idade >= 18).length;

const participantesFiltrados = Participantes.filter((p) => {
  if (filtro === "MAIORES") return p.idade >= 18;
  if (filtro === "MENORES") return p.idade < 18;
  return true;
});

return (
    <div className="container">
      <h1>Cadastro de Participantes</h1>

      {/* Formulário */}
      <div className="form">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) =>
            setIdade(e.target.value ? Number(e.target.value) : "")
          }
        />
        <button onClick={handleAdicionar}>Adicionar</button>
        <button onClick={handleLimpar}>Limpar</button>
      </div>

      {/* Contadores */}
      <div className="contadores">
        <p>Total: {total}</p>
        <p>Maiores de idade: {maiores}</p>
      </div>

      {/* Filtro */}
      <div className="filtro">
        <button
          onClick={() => setFiltro("TODAS")}
          className={filtro === "TODAS" ? "ativo" : ""}
        >
          Todas
        </button>
        <button
          onClick={() => setFiltro("MAIORES")}
          className={filtro === "MAIORES" ? "ativo" : ""}
        >
          Maiores
        </button>
        <button
          onClick={() => setFiltro("MENORES")}
          className={filtro === "MENORES" ? "ativo" : ""}
        >
          Menores
        </button>
      </div>

      {/* Lista */}
      <ul className="lista">
        {participantesFiltrados.map((p) => (
          <li key={p.id}>
            <span>
              {p.nome} - {p.idade} anos{" "}
            </span>
            {p.idade >= 18 ? (
              <span className="badge maior">Maior de idade</span>
            ) : (
              <span className="badge menor">Menor de idade</span>
            )}
            <button onClick={() => handleRemover(p.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;