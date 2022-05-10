import React from 'react'
import './styles.css';

export default function TelaInicial({valor, eleitor}) {
  const tela = [];
  const quantidadeNumeros = 4;
  for(let i in valor.padEnd(quantidadeNumeros, ' ')){
    if(i>=4){
      break;
    }
    else{
      const row = valor[i];
      tela.push(<div className="urna-voto-numero">{row}</div>)
    }
  }

  return (
    <div>
          <h1>Entre em sua conta</h1>
          <div className="urna-votos-numeros">
            Números
            {tela}            
          </div>
          <div className="nomeDoEleitor">
            {eleitor && eleitor.Nome}
          </div>
          
      </div>
  )
}
