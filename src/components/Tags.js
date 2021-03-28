import React from 'react';

import '../App.css';

export default function TextAreaDescription({ tags, setTags }) {
	return (
		<>
			<label> Tags </label>
			<div className='tags'>
				<div>
					<input
						className='tag'
						type='checkbox'
						name='checkbox_tag'
						id='tag1'
					/>
					<label className='label-tag nao-selecionavel' htmlFor='tag1'>
						web
					</label>
				</div>
				<div>
					<input
						className='tag'
						type='checkbox'
						name='checkbox_tag'
						id='tag2'
					/>
					<label className='label-tag nao-selecionavel' htmlFor='tag2'>
						api
					</label>
				</div>
			</div>
		</>
	);
}
