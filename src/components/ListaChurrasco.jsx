import React, { useState, useReducer } from 'react';

import { useAgenda } from "../context/AgendaDados"
import Modal from './Modal';
import './ListaChurrasco.css'

export default function ListaChurrasco(props) {
  let currentId = 1;
  const generateId = () => {
    currentId++;
    return currentId;
  };
  const pessoaInicial = [{id: generateId(), nome: '', contribuicao: ''}]
  const [people, setPeople] = useState(pessoaInicial)
  const [show, setShow] = useState(false)
  const [refName, setRefName] = useState('Agenda')
  const {agenda} = useAgenda();

  const adicionarPessoas = (event, item) => {
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
    //soma das contribuições e total de pessoas
  }

  const removePessoa = (event, id) => {
    debugger
    event.preventDefault()
    const newArray = [...people];
    newArray.pop()
    setPeople(newArray)
  }

  const showModal = (event, item) => {
    debugger
    //pegar o item.id para abrir os dados corretos na modal
    let refName = ''
    const aux = !show
    if(item != undefined){
      refName = {nome: 'AgendaChurras', id: item.id}
    }
    setShow(aux)
    setRefName(refName)
  }

  return (
    <>
     <div >
      <Modal onClose={showModal} show={show} reference={refName.nome} select={refName.id}/>
      {agenda.map(item => (
        <li className="fancy fade grow" key={item.id}>
          <div >
              {item.data.toString()}
          </div>
          <div>
           {item.nome}
          </div>
          <div>
             {item.desc} <span>.....</span> {item.obs} 
          </div>
        {/* <button onClick={(event) => adicionarPessoas(event, item)}>Adicionar Pessoas</button> */}
        <button onClick={(event) => showModal(event, item)}>Detalhes do Churras</button>
        <h5>Pessoas {item.pessoas != undefined ? item.pessoas.length : 0}</h5>
        </li>
      ))}
      </div>
      </>
      );
    }