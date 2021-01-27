import React from 'react'
import AgendaProvider from '../context/AgendaDados'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Agenda from './Agenda'
import './style/App.css'

export default function App() {
	const { height } = useWindowDimensions()
	return (
		<>
			<AgendaProvider>
				<div className='grid-container' style={{ height: height - 50 }}>
					<div className='header'>Agenda de Churrasco</div>
					<div className='main scrollbar' id='styleScrollbar'>
						<Agenda />
					</div>
					<div className='footer' id='background' />
				</div>
			</AgendaProvider>
		</>
	)
}
