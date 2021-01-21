import React, { useState } from "react";
import { useAgenda } from "../context/AgendaDados";
import ListaPessoas from "./ListaPessoas";
import { generateId } from "../helpers.js";

// formPessoas
export default function CriaPessoas(props) {
  const [valorNome] = useState();
  const [valorBebida, setBebida] = useState(false);
  const { agenda, setAgenda } = useAgenda();

  const changeState = (event) => {
    setBebida(event.target.checked);
  };
  const handleChange = (event, props) => {
    event.preventDefault();

    const novaAgenda = [...agenda];
    const agendaChanged = novaAgenda.find(
      (elem) => elem.id === props.agendaSelected.id
    );
    let contribuicao;
    if (valorBebida === true) {
      contribuicao = agendaChanged.bebida;
    } else {
      contribuicao = agendaChanged.valor;
    }
    const novaPessoa = {
      id: generateId(),
      nome: event.target.nome.value,
      contribuicao: contribuicao,
      bebida: event.target.bebida.value,
    };

    agendaChanged.amount =
      agendaChanged.amount + parseInt(parseInt(novaPessoa.contribuicao));

    if (agendaChanged.pessoas === undefined) {
      agendaChanged.pessoas = [new Object(novaPessoa)];
    } else {
      agendaChanged.pessoas.push(new Object(novaPessoa));
    }
    setAgenda(novaAgenda);
  };

  return (
    <>
      <div className="row">
        <form
          onSubmit={(event) => handleChange(event, props)}
          className="backgroundColor"
        >
          <div className="column">
              <input
                type="text"
                placeholder="Nome"
                name="nome"
                value={valorNome}
                required
              />
              <div className="column">
                <label for="nome">Nome</label>
              </div>
          </div>

          <div className="column">
            <div className="column">
              <label className="container" for="bebida">
                C/ Bebida?
                <input
                  type="checkbox"
                  placeholder="Bebida incluso"
                  name="bebida"
                  value={valorBebida}
                  onClick={(event) => changeState(event)}
                  className="checkbox"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <input type="submit" value="Ok" className="sizeButton"></input>
          </div>
        </form>
      </div>
      <hr className="slimLineWidth" />
      <ListaPessoas agenda={props.agendaSelected} />
    </>
  );
}
