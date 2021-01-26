import React, { useState } from 'react'
import { BsPeople } from 'react-icons/bs'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { GiBarbecue } from 'react-icons/gi'
import { useAgenda } from '../context/AgendaDados'
import Modal from './Modal'
import './style/ListaChurrasco.css'

export default function ListaChurrasco(props) {
	const [show, setShow] = useState(false)
	const [refName, setRefName] = useState('Agenda')
	const { agenda } = useAgenda()

	const showModal = (item) => {
		let refName = ''
		const aux = !show
		if (item !== undefined) {
			refName = { nome: 'AgendaChurras', id: item.id }
		} else {
			refName = 'Agenda'
		}
		setShow(aux)
		setRefName(refName)
	}

	return (
		<>
			<div className='list-container'>
				<Modal
					onClose={showModal}
					show={show}
					reference={refName.nome === undefined ? refName : refName.nome}
					select={refName.id}
				/>
				{agenda.map((item) => (
					<article
						className='article fancy fade grow '
						key={item.id}
						onClick={() => showModal(item)}
					>
						<div className='article header-title'>{item.data}</div>
						<div className='article title'>{item.nome}</div>
						<div className='article excerpt demo-1'>{item.desc}</div>
						<div className='article footer row'>
							<div className='column'>
								<BsPeople size={30} color='yellow' />{' '}
								{item.pessoas !== undefined ? item.pessoas.length : 0}
							</div>
							<div className='column'>
								<RiMoneyDollarCircleFill size={30} color='yellow' /> R${' '}
								{item.amount}
							</div>
						</div>
					</article>
				))}

				<article
					className='fancy fade centralize changeColor'
					onClick={() => showModal()}
				>
					<GiBarbecue size={70} color='yellow' />
					<div>Adicionar Churras</div>
				</article>
			</div>
		</>
	)
}
