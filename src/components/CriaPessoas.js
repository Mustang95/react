import React, { useState } from "react";
import { useAgenda } from "../context/AgendaDados";
import ListaPessoas from "./ListaPessoas";

//gerador de ids
let currentId = 0;
const generateId = () => {
  currentId++;
  return currentId;
};
// formPessoas
export default function CriaPessoas(props) {
  
  const [valorNome] = useState();
  const [valorBebida, setBebida] = useState(false);
  const { agenda, setAgenda } = useAgenda();

  const changeState = (event) => {
    setBebida(event.target.checked)
  }
  const handleChange = (event, props) => {
    event.preventDefault();

    const novaAgenda = [...agenda];
    const agendaChanged = novaAgenda.find(
      (elem) => elem.id === props.agendaSelected.id
    );
    
    let contribuicao
    if(valorBebida === true){
      contribuicao = agendaChanged.bebida
    } else {
      contribuicao = agendaChanged.valor
    }
    const novaPessoa = {
      id: generateId(),
      nome: event.target.nome.value,
      contribuicao: contribuicao,
      bebida: event.target.bebida.value,
    };

    agendaChanged.amount =
      agendaChanged.amount + parseInt(novaPessoa.contribuicao);

    if (agendaChanged.pessoas === undefined) {
      agendaChanged.pessoas = [new Object(novaPessoa)];
    } else {
      agendaChanged.pessoas.push(new Object(novaPessoa));
    }
    setAgenda(novaAgenda);
  };

  return (
    <>
      <form onSubmit={(event) => handleChange(event, props)} className="Card">

        <label for="nome">Nome do participante</label>
        <input type="text" placeholder="Nome" name="nome" value={valorNome} />

        <div>
          <label for="bebida">Bebida incluso?</label>
          <input
            type="checkbox"
            placeholder="Bebida incluso"
            name="bebida"
            value={valorBebida}
            onClick={(event) => changeState(event)}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
      <ListaPessoas agenda={props.agendaSelected} />
    </>
  );
}
