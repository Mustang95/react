import React, { useState } from 'react'
import { useAgenda } from '../context/AgendaDados'
import { generateId } from '../helpers/helpers.js'
import ListaPessoas from './ListaPessoas'

// formPessoas
export default function CriaPessoas(props) {
	const [valorNome, setNome] = useState('')
	const [valorBebida, setBebida] = useState(false)
	const { agenda, setAgenda } = useAgenda()

	function handleChange(event, props) {
		event.preventDefault()
		const novaAgenda = [...agenda]

		const agendaChanged = novaAgenda.find(
			(elem) => elem.id === props.agendaSelected.id
		)

		let contribuicao
		if (valorBebida === true) {
			contribuicao = agendaChanged.bebida
		} else {
			contribuicao = agendaChanged.valor
		}

		const novaPessoa = {
			id: generateId(),
			nome: valorNome,
			contribuicao: contribuicao,
			bebida: valorBebida,
		}

		agendaChanged.amount =
			agendaChanged.amount + parseInt(novaPessoa.contribuicao)

		if (agendaChanged.pessoas === undefined) {
			agendaChanged.pessoas = [new Object(novaPessoa)]
		} else {
			agendaChanged.pessoas.push(new Object(novaPessoa))
		}

		setAgenda(novaAgenda)
	}

	return (
		<>
			<div className='row'>
				<form
					onSubmit={(event) => handleChange(event, props)}
					className='backgroundColor'
				>
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
							<label htmlFor='nome'>Nome</label>
						</div>
					</div>

					<div className='column'>
						<div className='column'>
							<label className='container' htmlFor='bebida'>
								C/ Bebida?
								<input
									type='checkbox'
									placeholder='Bebida incluso'
									name='bebida'
									value={valorBebida}
									onClick={(event) => setBebida(event.target.checked)}
									className='checkbox'
								/>
							</label>
						</div>
						<input type='submit' value='Ok' className='sizeButton'></input>
					</div>
				</form>
			</div>
			<hr className='slimLineWidth' />
			<ListaPessoas agenda={props.agendaSelected} />
		</>
	)
}
