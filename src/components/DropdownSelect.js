import React from 'react';

import '../App.css';

export default function DropdownSelect({ select, setSelect }) {
	return (
		<div className='row'>
			<label className='label-input' htmlFor='cars'>
				Dropdown
			</label>
			<select
				className='input-10'
				name='cars'
				id='cars'
				form='carform'
				value={select}
				onChange={(event) => setSelect(event.target.value)}
			>
				<option value='1'>Select 1</option>
				<option value='2'>Select 2</option>
				<option value='3'>Select 3</option>
			</select>
		</div>
	);
}
