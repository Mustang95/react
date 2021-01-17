import React, {useState} from 'react'
import { useAgenda } from "../context/AgendaDados"

export default function CriarChurras(props) {
  //gerador de ids
  let currentId = 0;
  const generateId = () => {
    currentId++;
    return currentId;
  };
  //set
  const [valorNome] = useState();
  const [valorData] = useState();
  const [valorDesc] = useState();
  const [valorObs] = useState();
  const [valorSugerido] = useState();
  const [valorBebida] = useState();
  //
  const { agenda, setAgenda } = useAgenda();
  //set new item on agenda
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event)
    const novoItemArray = 
    { 
      id: generateId(),
      nome: event.target.nome.value,
      data: event.target.data.value,
      desc: event.target.desc.value,
      obs: event.target.obs.value
    };

    const newArray = [...agenda];
    newArray.push(novoItemArray);
    setAgenda(newArray);
  }

    return (
      <>
        <form onSubmit={handleChange} className="Card">
          <input type="text" placeholder="Nome" name="nome" value={valorNome}/>
          <input type="date" placeholder="Data" name="data" value={valorData}/>
          <input type="text" placeholder="Descrição breve" name="desc" value={valorDesc}/>
          <input type="number" placeholder="Valor p/ pessoa sugerido" name="valor" value={valorSugerido}/>
          <input type="checkbox" placeholder="Bebida inclusa?" name="bebida" value={valorBebida}/>
          <textarea type="text" placeholder="Observações" name="obs" value={valorObs}/> 
          <input type="submit" value="Submit"/>
        </form>
      </>
    )
}
