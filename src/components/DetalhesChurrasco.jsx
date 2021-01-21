import React from "react";
import { useAgenda } from "../context/AgendaDados";
import CriaPessoas from "./CriaPessoas";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { formatReal } from "../helpers/helpers.js";
import "./style/DetalhesChurrasco.css";

export default function DetalhesChurrasco(props) {
  const { agenda } = useAgenda();

  const agendaSelected = agenda.find((elem) => elem.id === props.id);

  return (
    <>
      <article key={agendaSelected.id}>
        <div className="row">
          <div className="column">
            <div className="header ">{agendaSelected.data.toString()} - {agendaSelected.nome}</div>
            <hr className="slimLineWidth" />
            {/* <h2></h2> */}
            {/*  */}
            <div className="row marginTop backgroundColorHeaders">
              <div className="column">
                C/ Bebida 
                <RiMoneyDollarCircleFill size={30} color="black"/>
                 {formatReal(agendaSelected.bebida)}
              </div>
              <div className="column">
                S/ Bebida <RiMoneyDollarCircleFill size={30} color="black"/> {formatReal(agendaSelected.valor)}
              </div>
            </div>
            {/*  */}
            <div className="content">
              {agendaSelected.desc}
              <hr className="slimLineWidth" />
              {agendaSelected.obs}
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
