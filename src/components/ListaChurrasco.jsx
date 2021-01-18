import React, { useState, useReducer } from "react";

import { useAgenda } from "../context/AgendaDados";
import Modal from "./Modal";
import "./ListaChurrasco.css";

export default function ListaChurrasco(props) {
  const [show, setShow] = useState(false);
  const [amount, setamount] = useState(0);
  const [refName, setRefName] = useState("Agenda");
  const { agenda } = useAgenda();

  const showModal = (event, item) => {
    //pegar o item.id para abrir os dados corretos na modal
    let refName = "";
    console.log("ListChurrasco:" + item)
    const aux = !show;
    if (item != undefined) {
      refName = { nome: "AgendaChurras", id: item.id };
    } else {
      refName = 'Agenda'
    }
    console.log("ListChurrasco RefName:" + refName)
    setShow(aux);
    setRefName(refName);
  };

  return (
    <>
      <div className="list-container">
        <Modal
          onClose={showModal}
          show={show}
          reference={refName.nome === undefined ? refName : refName.nome}
          select={refName.id}
        />
        {agenda.map((item) => (
          <article className="fancy fade grow " key={item.id}>
            <div>{item.data.toString()}</div>
            <div>{item.nome}</div>
            <div>
              {item.desc} 
            </div>
            <button onClick={(event) => showModal(event, item)}>
              Detalhes do Churras
            </button>
            <h5>
              Pessoas {item.pessoas != undefined ? item.pessoas.length : 0}
            </h5>
            <div>
               {item.obs}
            </div>
            <div>
               {item.amount}
            </div>
          </article>
        ))}
        <article className="fancy fade ">
          <button className="fillSpace" onClick={(event) => showModal(event)}>
            Chama Modal
          </button>
        </article>
      </div>
    </>
  );
}
