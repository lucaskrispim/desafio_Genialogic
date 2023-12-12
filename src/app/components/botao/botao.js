'use client';
import React from 'react';

const BotaoVermelho = () => {

  const handleClick = () => {
    alert('O botão foi clicado!');
  };

  return (
    <button
      style={{
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      Clique-me!
    </button>
  );
};

export default BotaoVermelho;