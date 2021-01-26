import React from 'react'
import CriarChurras from './CriarChurras'
import DetalhesChurrasco from './DetalhesChurrasco'
import { IoMdClose } from 'react-icons/io'
import './style/Modal.css'

export default function Modal(props) {
	function onClose(event) {
		props.onClose && props.onClose(event)
	}

	return (
		<>
			{props.show ? (
				<div className='modal' id='modal'>
					<h2>
						<div className='row'>
							<div className='column3 closeButton'>
								<IoMdClose onClick={onClose} />
							</div>
							<div className='column3'>
								{props.reference === 'Agenda'
									? 'Criando Churrasco'
									: 'Detalhes do Churrasco'}
							</div>
							<div className='column3'>
								<pre />
							</div>
						</div>
					</h2>
					<div className='content'>
						{props.reference === 'Agenda' && <CriarChurras></CriarChurras>}
					</div>
					<div>
						{props.reference === 'AgendaChurras' && (
							<DetalhesChurrasco id={props.select}></DetalhesChurrasco>
						)}
					</div>
				</div>
			) : null}
		</>
	)
}
