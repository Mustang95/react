import React from 'react';
import AgendaProvider from './context/AgendaDados'
import useWindowDimensions from './hooks/useWindowDimensions';
import Agenda from './components/Agenda';

import './style/App.css';

export default function App() {
  const { height, width } = useWindowDimensions();
  return (
    <>
    <AgendaProvider>
      <div className="grid-container" style={{height: (height - 100)}} >
        <div className="header">
        </div>
        <div className="main" id="overflowTest">
          <Agenda />
        </div>
      </div>
    </AgendaProvider>
    </>
  );
}