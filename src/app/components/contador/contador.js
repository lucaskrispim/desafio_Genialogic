'use client';
import React, { useState } from 'react';
import './contador.css'; 

const Contador = () => {
  const [contador, setContador] = useState(10);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
    <div className='container'>
      <h2 >Contador</h2>
      <h1>{contador}</h1>

    </div>
        <div className='container-row'>
          <button className="botao" onClick={incrementar}>Incrementar</button>
          <button className="botao" onClick={decrementar}>Decrementar</button>
        </div>
    </div>
  );
};

export default Contador;