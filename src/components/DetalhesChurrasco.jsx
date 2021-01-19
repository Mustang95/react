import React from 'react'
import { useAgenda } from "../context/AgendaDados"
import CriaPessoas from './CriaPessoas';

export default function DetalhesChurrasco(props) {
    
    const {agenda} = useAgenda();
    
    const agendaSelected = agenda.find(elem => elem.id === props.id)
    
    return (
        <>
        <article key={agendaSelected.id}>
          <div>
              {agendaSelected.data.toString()}
          </div>
          <div>
           {agendaSelected.nome}
          </div>
          <div>
             {agendaSelected.desc} 
                <span>.....</span>
             {agendaSelected.obs} 
          </div>
          <div>
             VALOR S/ BEBIDA: {agendaSelected.valor} 
                <span>.....</span>
             VALOR C/ BEBIDA: {agendaSelected.bebida} 
          </div>
        </article>
        <CriaPessoas agendaSelected={agendaSelected}></CriaPessoas>
        </>
    )
}