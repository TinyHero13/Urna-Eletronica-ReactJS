import {React, useState, useEffect} from 'react';
import TelaLanche from './TelaLanche';
import TelaInicial from './TelaInicial';
import TelaBebida from './TelaBebida';
import TelaFim from './TelaFim';
import './styles.css';

export default function Tela({etapa, valor, eleitor}) {
  const dados = JSON.parse(localStorage.getItem("DADOS"));
  const nomeEleitor = dados.votou[0].Nome;
  console.log(nomeEleitor)
  let tela; 
 
  if(etapa === 0){
    
    tela = <TelaInicial valor={valor} eleitor={eleitor}  />;
  }
 else if(etapa === 1){
    tela = <TelaLanche valor={valor} eleitor={nomeEleitor} />
  }
  else if(etapa === 2){
    tela = <TelaBebida valor={valor} eleitor={eleitor} />;
  }
  else if(valor === "0000"){
    tela = <h1>Secret0</h1>
  }
  else{
    tela = <TelaFim />
    
  }
  
  return (
    <div className="votos">
      {tela}
    </div>
  );
}
