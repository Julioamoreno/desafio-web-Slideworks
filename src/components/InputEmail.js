import React from 'react';

import '../App.css';

export default function InputEmail({ email, setEmail }) {
	return (
		<div>
			<label className='label-input' htmlFor='input_email'>
				E-mail
			</label>
			<input
				className='input-75'
				value={email}
				onChange={(event) => setEmail(event.target.value)}
				id='input_email'
			></input>
		</div>
	);
}
