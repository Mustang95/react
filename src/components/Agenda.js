import './Agenda.css'
import React, { useState } from 'react';
//import { useForm } from 'react-hook-form';
import ListaChurrasco from './ListaChurrasco';
import Modal from './Modal';

export default function Agenda() {
  const [show, setShow] = useState(false)
  const [refName, setRefName] = useState('Agenda')

  const showModal = (event) => {
    const aux = !show
    const refName = 'Agenda'
    setShow(aux)
    setRefName(refName)
  }

  return (
    <>
    <ListaChurrasco/>
    <button onClick={(event) => showModal(event)}>Chama Modal</button>
    <Modal onClose={showModal} show={show} reference={refName}/>
    </>
  )
}