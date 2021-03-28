import React from 'react';

import '../App.css';

export default function InputName({ name, setName }) {
	return (
		<div className='input'>
			<label className='label-input' htmlFor='input_name'>
				Name
			</label>
			<input
				className='input-75'
				value={name}
				onChange={(event) => setName(event.target.value)}
				id='input_name'
			></input>
		</div>
	);
}
