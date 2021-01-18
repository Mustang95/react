import './Agenda.css'
import React, { useState } from 'react';
import ListaChurrasco from './ListaChurrasco';
import Modal from './Modal';

export default function Agenda() {
  const [show, setShow] = useState(false)
  const [refName, setRefName] = useState('Agenda')

  const showModal = () => {
    const aux = !show
    setShow(aux)
    setRefName(refName)
  }

  return (
    <>
    <ListaChurrasco/>
    <Modal onClose={showModal} show={show} reference={refName}/>
    </>
  )
}