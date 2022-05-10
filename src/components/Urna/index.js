import {React, useState, useEffect} from 'react'
import Botoes from '../Botoes';
import Tela from '../Tela';
import urnaDados from '../../urnaDados.json';


import './styles.css';

export default function Urna({children}) {
  const [etapa, setEtapa] = useState(0);
  const [valor, setValor] = useState("");
  const [eleitor, setEleitor] = useState(null);

  useEffect(() => {
    const _eleitor = urnaDados.eleitores.find(
      (eleitor) => eleitor.Id === valor
    );
    if (_eleitor) {
      setEleitor(_eleitor);
    } else {
      setEleitor(null);
    }
  }, [valor]);


  const updateValor = (numero) => {
    setValor(`${valor}${numero}`); 
  };

  const limparValor = (numero) => {
    setValor("");
  };

  const confirmar = () => {
    if(etapa === 0){
      if(eleitor != null){
        setEtapa(etapa + 1);
        const dados = {
          votou: [eleitor]
        }
        localStorage.setItem("DADOS", JSON.stringify(dados));
      }
      else{
        console.log("Pessoa não identificada!")
      }
    }
    else{
      setEtapa(etapa + 1);
      const _dados = JSON.parse(localStorage.getItem(urnaDados));
      console.log(_dados)

    }

}

  return (
    <div className="tela">
      <Tela valor={valor} etapa={etapa} eleitor={eleitor}  />
      <Botoes setValor={updateValor} limparValor={limparValor} Confirmar={confirmar} />
    </div>
  )
}
