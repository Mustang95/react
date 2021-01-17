import React, { useState } from 'react';
import ListaPessoas from './ListaPessoas';

function Pessoas(props) {

  //gerador de ids
  let currentId = 0;
  const generateId = () => {
    currentId++;
    return currentId;
  };
  //body pessoa 
  const pessoaInicial = [{id: generateId(), nome: '', contribuicao: ''}]
  //set
  const [valorNome, setNome] = useState();
  const [valorContribuicao, setContribuicao] = useState();
  //pessoa
  const [pessoa, setPessoa] = useState(pessoaInicial);
  // let currentId = 1;
  // const generateId = () => {
  //   currentId++;
  //   return currentId;
  // };

  const handleChange = (event) => {
    debugger
    event.preventDefault();
    console.log(event)
    const novoItemArray = 
    { 
      id: generateId(),
      nome: event.target.nome.value,
      contribuicao: event.target.contribuicao.value
    };
    const newArray = [...pessoa];
    newArray.push(novoItemArray);
    setPessoa(newArray);
  }

    return (
      // <section>
      //   <ul>
      //     <h1>Pessoas</h1> 
      //     <button onClick={(event) => adicionarPessoas(props)}>ADD</button>
      //   </ul>
      // </section>
      <>
      <form onSubmit={handleChange}>
      <input type="text" placeholder="Nome" name="nome" value={valorNome}/>
      <input type="number" placeholder="Contribuicao" name="contribuicao" value={valorContribuicao}/>
      
      <input type="submit" value="Submit"/>
    </form>
    <ListaPessoas pessoas={pessoa}/>
    </>
    );
  }
  
  export default Pessoas;