import React from 'react'
import { useAgenda } from "../context/AgendaDados"
import CriaPessoas from './CriaPessoas';

export default function DetalhesChurrasco(props) {
    const {agenda} = useAgenda();
    const agendaSelected = agenda.find(elem => elem.id === props.selected)
    return (
        <>
        <li key={agendaSelected.id}>
          <div >
              {agendaSelected.data.toString()}
          </div>
          <div>
           {agendaSelected.nome}
          </div>
          <div>
             {agendaSelected.desc} <span>.....</span> {agendaSelected.obs} 
          </div>
        <h5>Pessoas {agendaSelected.pessoas != undefined ? agendaSelected.pessoas.length : 0}</h5>
        </li>
        <CriaPessoas></CriaPessoas>
        </>
    )
}