import React, {useState} from 'react'

export default function ListaPessoas(props) {
    return ( 
    <> 
    <section>
        <h1>Lista Pessoas1</h1>
        {props.pessoas.map(pessoa => (
                <ul>
                    <li key={pessoa.id}>
                        {pessoa.nome} -
                        {pessoa.contribuicao}
                        <button>DELETE</button>
                    </li>
                </ul>
            ))}
    </section> 
    </>
    )
}