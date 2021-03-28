import React from 'react';

import '../App.css';

export default function CheckboxOpcao({ email, setEmail }) {
	return (
		<div className='row-flex'>
			<div>
				<input type='checkbox' name='checkbox_opcao1' id='checkbox1' />
				<label htmlFor='checkbox1'>Opção 1</label>
			</div>
			<div>
				<input type='checkbox' name='checkbox_opcao2' id='checkbox2' />
				<label htmlFor='checkbox2'>Opção 2</label>
			</div>
			<div>
				<input type='checkbox' name='checkbox_opcao3' id='checkbox3' />
				<label htmlFor='checkbox3'>Opção 3</label>
			</div>
		</div>
	);
}
