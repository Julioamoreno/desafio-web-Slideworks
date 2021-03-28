import React from 'react';

import '../App.css';

export default function Button({ createCard }) {
	return (
		<div className='button'>
			<button onClick={createCard} type='submit'>
				Enviar
			</button>
		</div>
	);
}
