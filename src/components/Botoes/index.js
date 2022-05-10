import React from 'react';
import './styles.css';

export default function Botoes({setValor, Branco, limparValor, Confirmar}) {
    const botoesNumericos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const botoesFuncoes = {
        Corrigir: () =>{
            limparValor();
        }, 
        Branco: () => {
            Branco();
        },
        Confirmar: () =>{
            Confirmar();
        },
    };

  return (
    <div className="botoes">
        <div className="botoesnumericos">
            {botoesNumericos.map((botao, index) => (
                <button className={`botao botao-${botao} botoesnumericos`}
                key={index}
                onClick={() =>setValor(botao)}
                >
                {botao}
                </button>
            ) )}
        </div>
        {Object.keys(botoesFuncoes).map((botao, index) => (
            <button
            className={`botao botao-funcao botao-${botao.toLowerCase()}`}
            key={index}
            onClick={() => botoesFuncoes[botao]()}
            >
            {botao}
            </button>
        ))}
    </div>
  )
}
