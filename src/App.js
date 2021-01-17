import React from 'react';
import AgendaProvider from './context/AgendaDados'
import Agenda from './components/Agenda';

import './style/App.css';

export default function App() {
  return (
    <>
    <AgendaProvider>
      <div className="grid-container">
        <div className="header"> TESTE
        </div>
        <div className="main"> <h4>Agenda Churras</h4>
          <Agenda />
        </div>
        <div className="right"> TESTE
          {/* detalhes do churrasco qtd pessoas  e dinheiro arrecadado */}
        </div>
        <div className="footer"> TESTE
        </div>
      </div>
    </AgendaProvider>
    </>
  );
}