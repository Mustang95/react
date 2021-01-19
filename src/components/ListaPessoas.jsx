import React from 'react'
import { useAgenda } from "../context/AgendaDados"

export default function ListaPessoas(props) {
    
    const {agenda, setAgenda} = useAgenda();

    const removePessoa = (pessoa, props) => {

        const novaAgenda = [...agenda];
        const auxAgenda = agenda.find(elem => elem.id === props.agenda.id)
        const auxPessoa = agenda.find(elem => elem.id === props.agenda.id).pessoas
        auxAgenda.amount = (auxAgenda.amount - parseInt(auxPessoa.find(elem => elem.id === pessoa.id).contribuicao))
        auxPessoa.splice(auxPessoa.findIndex(elem => elem.id === pessoa.id), 1)
        setAgenda(novaAgenda);
    }
    return ( 
    <> 
    <section>
        <h4>{props.contribuicao} - {agenda.nome}</h4>
        <h1>Lista Pessoas ({props.agenda.pessoas != undefined ? props.agenda.pessoas.length : 0})</h1>
        {props.agenda.pessoas != undefined && props.agenda.pessoas.map(pessoa => (
                <ul>
                    <li key={pessoa.id}>
                        {pessoa.nome} -
                        {pessoa.contribuicao} - 
                        {pessoa.bebida === true ? 'Bebida incluso' : 'Sem Bebida'}
                        <button onClick={() => removePessoa(pessoa, props)}>DELETE</button>
                    </li>
                </ul>
            ))}
    </section> 
    </>
    )
}