'use client';
import React, { useState } from 'react';
import './somador.css'; 

const SomaNumerosPares = () => {
  const [numeros, setNumeros] = useState('');
  const [resultado, setResultado] = useState('');

  const somaNumerosPares = (numeros) => {
    let soma = 0;
    print(numeros)
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        soma += numeros[i];
      }
    }

    return soma;
  };

  const calcularSoma = () => {
    
    const numerosArray = numeros.split(',').map(Number);
    console.log(numerosArray)
    const soma = somaNumerosPares(numerosArray);
    setResultado(`Soma: ${soma}`);
  };



  return (
    <div>
      <input
        type="text"
        placeholder="Insira os números separados por vírgula"
        value={numeros}
        onChange={(e) => setNumeros(e.target.value)}
      />
      <button className='botao' onClick={calcularSoma}>Calcular Soma</button>
      <p>{resultado}</p>
    </div>
  );
};

export default SomaNumerosPares;
