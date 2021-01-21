import React, { useState } from "react";
import { useAgenda } from "../context/AgendaDados";
import { formatDate, generateId } from "../helpers.js";
import "./CriarChurras.css";

// mudar de nome para formChurrasco
export default function CriarChurras(props) {
  const [valorNome] = useState();
  const [valorData] = useState();
  const [valorDesc] = useState();
  const [valorObs] = useState();
  const [valorSugerido] = useState();
  const [valorBebida] = useState();

  const { agenda, setAgenda } = useAgenda();
  // const { formatDate, setFormatDate} = useFormatDate();

  const handleChange = (event) => {
    event.preventDefault();
    const dataFormatada = formatDate(event.target.data.value);

    const novoAgendamentoChurrasco = {
      id: generateId(),
      nome: event.target.nome.value,
      data: dataFormatada,
      desc: event.target.desc.value,
      obs: event.target.obs.value,
      valor: event.target.valor.value,
      bebida: event.target.bebida.value,
      amount: 0,
    };

    const novaAgenda = [...agenda];
    novaAgenda.push(novoAgendamentoChurrasco);
    setAgenda(novaAgenda);
  };

  return (
    <>
      <form onSubmit={handleChange} id="form">
        <div className="fillBackground row">
          <div className="column">
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              value={valorNome}
              maxLength="20"
              required
            />
            <div className="column">
              <label htmlFor="bebida">Motivo</label>
            </div>
          </div>
          {/*  */}
          <div className="column">
            <input
              type="date"
              placeholder="Data"
              name="data"
              value={valorData}
              required
            />
            <div className="column">
              <label htmlFor="bebida">Quando</label>
            </div>
          </div>
          {/*  */}
          <div className="column">
            <textarea
              type="text"
              placeholder="Descrição breve"
              name="desc"
              rows="4"
              cols="30"
              value={valorDesc}
              maxLength="140"
            />
            <div className="column">
              <label htmlFor="bebida">Descrição para o participantes</label>
            </div>
          </div>
          {/*  */}
          <div className="column">
            <input
              type="text"
              placeholder="Valor p/ pessoa sugerido"
              name="valor"
              value={valorSugerido}
              required
            />
            <div className="column">
              <label htmlFor="bebida">Valor sem bebidas</label>
            </div>
          </div>
          {/*  */}
          <div className="column">
            <input
              type="number"
              placeholder="Valor p/ pessoa sugerido"
              name="bebida"
              value={valorBebida}
              required
            />
            <div className="column">
              <label htmlFor="bebida">Valor com bebida incluso</label>
            </div>
          </div>
          {/*  */}
          <div className="column">
            <textarea
              type="text"
              placeholder="Observações"
              name="obs"
              rows="3"
              cols="30"
              value={valorObs}
              maxLength="90"
            />
            <div className="column">
              <label htmlFor="bebida">Observações</label>
            </div>
          </div>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}
