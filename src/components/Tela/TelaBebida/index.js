import {React, useState, useEffect} from 'react'
import urnaDados from '../../../urnaDados.json';
import './styles.css';

export default function TelaBebida({valor, nomeEleitor}) {
  const [bebidas, setBebidas] = useState(null);
  const tela = [];
  const quantidadeNumeros = 3;

  useEffect(() => {
    const _bebidas = urnaDados.bebidas.find(
      (bebidas) => bebidas.Id === valor
    );
    if (_bebidas) {
      setBebidas(_bebidas);
    } else {
      setBebidas(null);
    }
  }, [valor]);

  for(let i in valor.padEnd(quantidadeNumeros, ' ')){
    if(i>=3){
      break;
    }
    else{
      const row = valor[i];
      tela.push(<div className="urna-voto-numero">{row}</div>)
    }
  }

  return (
    <div>
      Bem-vindo {nomeEleitor}!
      <h1>Vote na bebida!</h1>
      <div className="urna-votos-numeros">
        Números
        {tela}
      </div>
      <img src={`${bebidas && bebidas.Imagem}`} width="110px" height="70px" alt="Foto da bebida" /><br />
      {bebidas && bebidas.Nome}
    </div>
  )
}
