import React from 'react';
import Book from './Book';

const style = {
	
}

const BookList = ({list}) => {
	const bookList = list.map((book) => {
		return <Book title={book.title} length={book.length} key={book.title+book.length.toString()}/>
	});
	return (
		<div>{bookList}</div>
	)
}

export default BookList;