import React from 'react'
import CriarChurras from './CriarChurras';
import DetalhesChurrasco from './DetalhesChurrasco';
import '../style/Modal.css'

export default function Modal(props) {
  console.log("Modal recebe:" + props.reference)
    const onClose = (event) => {
      props.onClose && props.onClose(event)
    }
    return (
       <>
       {props.show ? 
       <div className="modal" id="modal">
        <h2>{props.reference === 'Agenda' ? 'Criando Churrasco' : 'Detalhes do Churrasco'}</h2>
        <div className="content">{props.reference === 'Agenda' && <CriarChurras></CriarChurras> }</div>
        <div className="content">{props.reference === 'AgendaChurras' && <DetalhesChurrasco id={props.select}></DetalhesChurrasco> }</div>
        <div className="actions">
          <button className="toggle-button" onClick={onClose}>
            close
          </button>
        </div>
      </div>
       :
      null }
       </>
    )
}