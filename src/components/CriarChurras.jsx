import React, { useState } from 'react'
import { useAgenda } from '../context/AgendaDados'
import { formatDate, generateId } from '../helpers/helpers.js'
import './style/CriarChurras.css'

// mudar de nome para formChurrasco
export default function CriarChurras(props) {
	const [valorNome, setNome] = useState('')
	const [valorData, setData] = useState('')
	const [valorDesc, setDesc] = useState('')
	const [valorObs, setObs] = useState('')
	const [valorSemBebida, setValorSemBebida] = useState('')
	const [valorComBebida, setVlorComBebida] = useState('')

	const { agenda, setAgenda } = useAgenda()

	function handleChange(event) {
		event.preventDefault()
		const dataFormatada = formatDate(valorData)

		const novoAgendamentoChurrasco = {
			id: generateId(),
			nome: valorNome,
			data: dataFormatada,
			desc: valorDesc,
			obs: valorObs,
			valor: valorSemBebida,
			bebida: valorComBebida,
			amount: 0,
		}

		const novaAgenda = [...agenda]
		novaAgenda.push(novoAgendamentoChurrasco)
		setAgenda(novaAgenda)
	}

	function onChangeNumberValues(input) {
		if (input.value < 0) return
		if (input.name === 'semBebida') setValorSemBebida(input.value)
		else setVlorComBebida(input.value)
	}

	return (
		<>
			<form onSubmit={handleChange} id='form'>
				<div className='fillBackground row'>
					<div className='column'>
						<input
							type='text'
							placeholder='Nome'
							name='nome'
							value={valorNome}
							maxLength='20'
							required
							onChange={(event) => setNome(event.target.value)}
						/>
						<div className='column'>
							<label htmlFor='bebida'>Motivo</label>
						</div>
					</div>
					{/*  */}
					<div className='column'>
						<input
							type='date'
							placeholder='Data'
							name='data'
							value={valorData}
							required
							onChange={(event) => setData(event.target.value)}
						/>
						<div className='column'>
							<label htmlFor='bebida'>Quando</label>
						</div>
					</div>
					{/*  */}
					<div className='column'>
						<textarea
							type='text'
							placeholder='Descrição breve'
							name='desc'
							rows='4'
							cols='30'
							value={valorDesc}
							maxLength='140'
							onChange={(event) => setDesc(event.target.value)}
						/>
						<div className='column'>
							<label htmlFor='bebida'>Descrição para o participantes</label>
						</div>
					</div>
					{/*  */}
					<div className='column'>
						<input
							type='number'
							placeholder='Valor p/ pessoa sugerido'
							name='semBebida'
							value={valorSemBebida}
							required
							onChange={(event) => onChangeNumberValues(event.target)}
						/>
						<div className='column'>
							<label htmlFor='semBebida'>Valor sem bebidas</label>
						</div>
					</div>
					{/*  */}
					<div className='column'>
						<input
							type='number'
							placeholder='Valor p/ pessoa sugerido'
							name='comBebida'
							value={valorComBebida}
							required
							onChange={(event) => onChangeNumberValues(event.target)}
						/>
						<div className='column'>
							<label htmlFor='comBebida'>Valor com bebida incluso</label>
						</div>
					</div>
					{/*  */}
					<div className='column'>
						<textarea
							type='text'
							placeholder='Observações'
							name='obs'
							rows='3'
							cols='30'
							value={valorObs}
							maxLength='90'
							onChange={(event) => setObs(event.target.value)}
						/>
						<div className='column'>
							<label htmlFor='bebida'>Observações</label>
						</div>
					</div>
				</div>
				<div>
					<input type='submit' value='Submit' />
				</div>
			</form>
		</>
	)
}
