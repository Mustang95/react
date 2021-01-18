import React, { createContext, useState, useContext } from 'react'

const AgendaDadosContext = createContext()

export default function AgendaDadosProvider({ children }) {
    const agendaInitialState = [] 
    // [ { id: 0,
    //   nome: 'Churrasco da paçoca',
    //   data: '2021-07-07',
    //   desc: 'muito bom',
    //   obs: 'vegetarianos bem vindos',
    //   valorSugerido: '30.00',
    //   bebida: false
    // } ];
    const [agenda, setAgenda] = useState(agendaInitialState);
    
    return (
        <AgendaDadosContext.Provider value={{agenda, setAgenda}}>
            {children}
        </AgendaDadosContext.Provider>
    )
}

export function useAgenda() {
    const context = useContext(AgendaDadosContext)
    if (!context) throw new Error("useAgenda must be used within a AgendaDadosProvider");
    const { agenda, setAgenda} = context
    return {agenda, setAgenda}
}