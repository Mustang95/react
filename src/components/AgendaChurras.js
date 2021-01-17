import React, { useState, useReducer } from 'react';

function AgendaChurras(props) {
  let currentId = 1;
  const generateId = () => {
    currentId++;
    return currentId;
  };
  const pessoaInicial = [{id: generateId(), nome: '', contribuicao: ''}]
  const [people, setPeople] = useState(pessoaInicial)


  const adicionarPessoas = (event, item) => {
    debugger
  //  event.stopPropagation()
    event.preventDefault()
    const novoItemArray = 
    { 
      id: generateId(),
      nome: '',
      contribuicao: ''
    };
    const newArray = [...people];
    newArray.push(novoItemArray);
    setPeople(newArray);
    if(item.pessoas === undefined){
     item.pessoas = [new Object(novoItemArray)]
    } else {
      item.pessoas.push(new Object(novoItemArray))
    }
  }

  const detalhesChurras = (event, agenda) => {
    debugger
    //soma das contribuições e total de pessoas
  }

  const removePessoa = (event, id) => {
    debugger
  }


  return (
    <>
     <div className="Layout">
      <h1>Agenda Churras</h1>
      {props.agenda.map(item => (
        <li key={item.id}> {item.nome} - {item.desc} - {item.obs} - {item.data.toString()} 
        <button onClick={(event) => adicionarPessoas(event, item)}>ADD Pessoaas</button>
        <button onClick={(event) => detalhesChurras(event, item)}>Detalhes do Churras</button>
        <h1>Pessoas {item.pessoas != undefined ? item.pessoas.length : 0}</h1>
            {item.pessoas != undefined && item.pessoas.map(pessoa => (
              <ul>
              <li key={pessoa.id}> {pessoa.nome} <button onClick={(event) => removePessoa(event, pessoa.id)}>removar</button> </li>
              </ul>
            ))}
        </li>
      ))}
      </div>
      </>
  );
}

export default AgendaChurras;