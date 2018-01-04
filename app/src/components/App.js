import React, { Component } from 'react';
import BookList from './BookList';
var axios = require('axios');
class App extends Component {
	constructor() {
		super();

		axios.defaults.baseURL = 'http://localhost:8080/api';
		
		this.state = {books : []}
	}

	componentDidMount() {
		let list = [];
    	axios.get('books')
    	.then(function (req, res) {
			console.log(req.data);
			req.data.map((book, index) => {
				list[index] = book;
			})
    	}).then(() => {
			this.setState({books: list});
		});
	}

  	render() {
		return (
			<BookList list={this.state.books} />
		);
  }
}

export default App;
