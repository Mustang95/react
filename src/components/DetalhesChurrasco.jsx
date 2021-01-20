import React from "react";
import { useAgenda } from "../context/AgendaDados";
import CriaPessoas from "./CriaPessoas";
import "./DetalhesChurrasco.css";

export default function DetalhesChurrasco(props) {
  const { agenda } = useAgenda();

  const agendaSelected = agenda.find((elem) => elem.id === props.id);

  return (
    <>
      <article key={agendaSelected.id}>
        <div className="row">
          <div className="column">
            <div className="backgroundColor">

            <div>
              {agendaSelected.data.toString()}
            </div>
            <div >{agendaSelected.nome}</div>
            <div className="content">
              {agendaSelected.desc}
              <hr/>
              {agendaSelected.obs}
            </div >
            </div>

            <div className="backgroundColor marginTop">
              VALOR S/ BEBIDA: {agendaSelected.valor}
              <hr/>
              VALOR C/ BEBIDA: {agendaSelected.bebida}
            </div>
            
          </div>
          <div className="column">
            <CriaPessoas agendaSelected={agendaSelected}></CriaPessoas>
          </div>
        </div>
      </article>
    </>
  );
}
