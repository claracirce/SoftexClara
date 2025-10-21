import { useState } from "react";
import "./App.css";

export default function App() {
  const [cliques, setCliques] = useState(0);
  const [incremento, setIncremento] = useState(1);

  const handleIncrementoChange = (e) => {
    const value = Number(e.target.value);
    setIncremento(value >= 1 ? value : 1);
  };

  const somar = () => setCliques((c) => c + incremento);
  const subtrair = () => setCliques((c) => c - incremento);
  const zerar = () => setCliques(0);

  return (
    <div className="container-box">
      <h1>Contador de cliques</h1>
      <p>
        Você clicou <strong>{cliques}</strong> vez(es)
      </p>
      <label>
        Incremento:
        <input
          type="number"
          min="1"
          value={incremento}
          onChange={handleIncrementoChange}
        />
      </label>
      <div style={{ marginTop: 20 }}>
        <button onClick={somar}>Somar</button>
        <button onClick={subtrair}>Subtrair</button>
        <button onClick={zerar}>Zerar</button>
      </div>
    </div>
  );
}