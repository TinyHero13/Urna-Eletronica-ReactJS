import {React, useState, useEffect} from 'react'
import urnaDados from '../../../urnaDados.json';
import './styles.css';

export default function TelaLanche({valor, nomeEleitor}) {
  const [lanches, setLanche] = useState(null);
  const tela = [];
  const quantidadeNumeros = 2;
  console.log(nomeEleitor);
  
  
  useEffect(() => {
    const _lanches = urnaDados.lanches.find(
      (lanches) => lanches.Id === valor
    );
    if (_lanches) {
      setLanche(_lanches);
    } else {
      setLanche(null);
    }
  }, [valor]);


  for(let i in valor.padEnd(quantidadeNumeros, ' ')){
    if(i>=2){
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
      <h1>Vote no lanche</h1>
      <div className="urna-votos-numeros">
        Números
        {tela}
      </div>
      <img src={`${lanches && lanches.Imagem}`} width="110px" height="70px" alt="Foto do Lanche" /><br />
      {lanches && lanches.Nome}
    </div>
  )
}
