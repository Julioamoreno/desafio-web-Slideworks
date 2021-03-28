import React from 'react';

import '../App.css';

export default function TextAreaDescription({ description, setDescription }) {
	return (
		<div>
			<label className='label-input' htmlFor='textarea_type'>
				Type something...
			</label>
			<textarea
				className='input-75'
				id='textarea_type'
				rows='10'
				cols='30'
				value={description}
				onChange={(event) => setDescription(event.target.value)}
				//tamanho maximo de palavras 16384, descrição
			></textarea>
		</div>
	);
}
