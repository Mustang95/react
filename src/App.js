import React, { useState, useRef } from 'react';
import Agenda from './components/Agenda';
import AgendaChurras from './components/AgendaChurras';
import Modal from './components/Modal';
import Pessoas from './components/Pessoas';
import Card from './components/layout/Card';
import './style/App.css';

function App() {
  const [show, setShow] = useState(false)
  const [refName, setRefName] = useState('')

  const showModal = (event) => {
    const aux = !show
    const refName = 'App'
    setShow(aux)
    setRefName(refName)
  }

  return (
    <>
    <div className="grid-container">
      <div className="header"> TESTE
      </div>
      <div className="main"> TESTE
      {/* <AgendaChurras></AgendaChurras> */}
      <Agenda />
      </div>
      <div className="right"> TESTE

      </div>
      <div className="footer"> TESTE

      </div>
      </div>
      <button onClick={(event) => showModal(event)}>Chama Modal</button>
      <Modal onClose={showModal} show={show} reference={refName}/>
      <Pessoas></Pessoas>
    </>
  );
}

export default App;