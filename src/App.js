import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { API } from './api';

import InputName from './components/InputName';
import InputEmail from './components/InputEmail';
import TextAreaDescription from './components/TextAreaDescription';
import CheckboxOpcao from './components/CheckboxOpcao';
import DropdownSelect from './components/DropdownSelect';
import Tags from './components/Tags';

import './App.css';
import Button from './components/Button';

export default function App() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [description, setDescription] = useState('');
	const [select, setSelect] = useState('');
	const [tags, setTags] = useState('');

	const createCard = async (e) => {
		try {
			const response = await API.post('/board', {
				name,
				description,
			});

			if (response.ok) {
				clearInput();
				toast.success(`Board ${response.data.message.name} criado com sucesso`);
			} else {
				toast.error('Ocorreu um erro');
				if (response.status === 404) {
					toast.error('Servidor não encontrado');
				}
			}
		} catch (error) {
			toast.error(error);
			console.log(error);
		}
	};

	const clearInput = () => {
		setName('');
		setEmail('');
		setDescription('');
		setSelect('');
		setTags('');
	};

	return (
		<form className='container'>
			<ToastContainer />
			<div className='col-70'>
				<InputName name={name} setName={setName} />
				<InputEmail email={email} setEmail={setEmail} />

				<TextAreaDescription
					description={description}
					setDescription={setDescription}
				/>
			</div>
			<div className='col-30 right'>
				<CheckboxOpcao />
				<DropdownSelect select={select} setSelect={setSelect} />

				<div className='row'>
					<Tags tags={tags} setTags={setTags} />
					<Button createCard={createCard} />
				</div>
			</div>
		</form>
	);
}
