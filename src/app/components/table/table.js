'use client';
import React from 'react';
import './table.css'; 

const TabelaDeProdutos = (props) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className='cell'>Nome</th>
            <th className='cell'>Preço</th>
          </tr>
        </thead>
        <tbody>
          {props?.produtosList?.map((product) => (
            <tr key={product.id}>
              <td className='cell' >{product.nome}</td>
              <td className='cell' >{product.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaDeProdutos;
