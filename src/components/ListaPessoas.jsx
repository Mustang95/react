import React from "react";
import { useAgenda } from "../context/AgendaDados";
import { MdDeleteForever } from "react-icons/md";
import { BiCircle } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import "./style/ListaPessoas.css";
import { formatReal } from "../helpers/helpers.js";

export default function ListaPessoas(props) {
  const { agenda, setAgenda } = useAgenda();
  const removePessoa = (pessoa, props) => {
    const novaAgenda = [...agenda];
    const auxAgenda = agenda.find((elem) => elem.id === props.agenda.id);
    const auxPessoa = agenda.find((elem) => elem.id === props.agenda.id)
      .pessoas;
    auxAgenda.amount =
      auxAgenda.amount -
      parseInt(auxPessoa.find((elem) => elem.id === pessoa.id).contribuicao);
    auxPessoa.splice(
      auxPessoa.findIndex((elem) => elem.id === pessoa.id),
      1
    );
    setAgenda(novaAgenda);
  }

  return (
    <>
      <div className="modal-dialog ">
        <div className="row backgroundColorHeaders">
          <div className="column">
            Pessoas (
              <BsPeople size={30} color="black"/> {props.agenda.pessoas !== undefined
              ? props.agenda.pessoas.length
              : 0}
            )
          </div>
          <div className="column">
            Arrecadado(
          <RiMoneyDollarCircleFill size={30} color="black"/> {formatReal(props.agenda.amount)})
           </div>
        </div>

        <div className="modal-body" id="styleScrollbar">
          <table>
            <thead>

            {props.agenda.pessoas !== undefined &&
              props.agenda.pessoas.map((pessoa) => (
                <tr key={pessoa.id}>
                  <td>
                    <BiCircle size={15} />
                  </td>
                  <td>{pessoa.nome}</td>
                  <td>{formatReal(pessoa.contribuicao)}</td>
                  <td>
                    {pessoa.bebida === true ? "C/ Bebida" : "S/ Bebida"}
                  </td>
                  <td>
                    <MdDeleteForever
                      size={25}
                      onClick={() => removePessoa(pessoa, props)}
                      />
                  </td>
                </tr>
              ))}
              </thead>
          </table>
        </div>
      </div>
    </>
  );
}
