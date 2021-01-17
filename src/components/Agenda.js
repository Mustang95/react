import './Agenda.css'
import React, { useState } from 'react';
//import { useForm } from 'react-hook-form';
import AgendaChurras from './AgendaChurras';
import Modal from './Modal';

function Agenda() {
  const [show, setShow] = useState(false)
  const [refName, setRefName] = useState('Agenda')
  //gerador de ids
  let currentId = 0;
  const generateId = () => {
    currentId++;
    return currentId;
  };
  //body agenda
  const agendaInitialState = 
    [ { id: generateId(),
      nome: '',
      data: new Date,
      desc: '',
      obs: '',
      valorSugerido: '',
      bebida: false
      //pessoas: [{id: generateId(), nome: '', contribuicao: ''}]
      
    } ];
  //set
  const [valorNome, setNome] = useState();
  const [valorData, setData] = useState();
  const [valorDesc, setDesc] = useState();
  const [valorObs, setObs] = useState();
  const [valorSugerido, setvalorSugerido] = useState();
  const [valorBebida, setBebida] = useState();
  //agenda
  const [ agenda, setAgenda ] = useState(agendaInitialState);
  //set new item on agenda
  const handleChange = (event) => {
    debugger
    event.preventDefault();
    console.log(event)
    const novoItemArray = 
    { 
      id: Math.random,
      nome: event.target.nome.value,
      data: event.target.data.value,
      desc: event.target.desc.value,
      obs: event.target.obs.value
    };
    const newArray = [...agenda];
    newArray.push(novoItemArray);
    setAgenda(newArray);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('aaaa')
  }

  const showModal = (event) => {
    const aux = !show
    const refName = 'Agenda'
    setShow(aux)
    setRefName(refName)
  }

  return (
    <>
    <button onClick={(event) => showModal(event)}>Chama Modal</button>
    <Modal onClose={showModal} show={show} reference={refName}/>
    <form onSubmit={handleChange} className="Card">
      <input type="text" placeholder="Nome" name="nome" value={valorNome}/>
      <input type="date" placeholder="Data" name="data" value={valorData}/>
      <input type="text" placeholder="Descrição breve" name="desc" value={valorDesc}/>
      <input type="number" placeholder="Valor p/ pessoa sugerido" name="valor" value={valorSugerido}/>
      <input type="checkbox" placeholder="Bebida inclusa?" name="bebida" value={valorBebida}/>
      <textarea type="text" placeholder="Observações" name="obs" value={valorObs}/> 
      <input type="submit" value="Submit"/>
    </form>
    <AgendaChurras agenda={agenda}/>
    </>
  )
}

export default Agenda;