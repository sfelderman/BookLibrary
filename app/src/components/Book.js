import React from 'react';
import DisplayData from './DisplayData';

const style = {
	border: '1px solid',
	width: '150px'
}

const Book = ({title, length}) => {
	return (
		<div style = {style} className='book'>
			<DisplayData data={title} />
			<DisplayData data={length} />
		</div>
	)
}

export default Book;