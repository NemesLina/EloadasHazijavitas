import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React Projekt Forráskód</h1>
      <p>Ez a fájl a src mappában található, mint nyers forráskód.</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Számláló értéke: {count}
        </button>
      </div>
    </div>
  );
}

export default App;