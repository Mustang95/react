import React, {useState} from 'react'
import { useAgenda } from "../context/AgendaDados"
//gerador de ids
let currentId = 0;
const generateId = () => {
  currentId++;
  return currentId;
};
const formatDate = (data) => {
  let aux = data
  aux = aux.substr(5,5)
  const newDate = aux.replace("-", "/")
  return newDate
}
// mudar de nome para formChurrasco
export default function CriarChurras(props) {
  
  const [valorNome] = useState();
  const [valorData] = useState();
  const [valorDesc] = useState();
  const [valorObs] = useState();
  const [valorSugerido] = useState();
  const [valorBebida] = useState();
  
  const { agenda, setAgenda } = useAgenda();

  
  const handleChange = (event) => {
    debugger
    event.preventDefault();
    
    const dataFormatada = formatDate(event.target.data.value)

    const novoAgendamentoChurrasco = 
    { 
      id: generateId(),
      nome: event.target.nome.value,
      data: dataFormatada,
      desc: event.target.desc.value,
      obs: event.target.obs.value,
      valor: event.target.valor.value,
      bebida: event.target.bebida.value,
      amount: 0
    };
    
    const novaAgenda = [...agenda];
    novaAgenda.push(novoAgendamentoChurrasco);
    setAgenda(novaAgenda);
  }

  

    return (
      <>
        <form onSubmit={handleChange} className="Card">
          <label for="bebida">Motivo</label>
          <input type="text" placeholder="Nome" name="nome" value={valorNome}/>
          
          <label for="bebida">Quando</label>
          <input type="date" placeholder="Data" name="data" value={valorData}/>
          
          <label for="bebida">Descrição para o participantes</label>
          <input type="text" placeholder="Descrição breve" name="desc" value={valorDesc}/>
          
          <label for="bebida">Valor sem bebidas</label>
          <input type="number" placeholder="Valor p/ pessoa sugerido" name="valor" value={valorSugerido}/>
          
          <label for="bebida">Valor com bebida incluso</label>
          <input type="number" placeholder="Bebida inclusa?" name="bebida" value={valorBebida}/>
          
          <label for="bebida">Observações</label>
          <textarea type="text" placeholder="Observações" name="obs" value={valorObs}/> 
          
          <input type="submit" value="Submit"/>
        </form>
      </>
    )
}
