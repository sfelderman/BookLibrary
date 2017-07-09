import React, { Component } from 'react';
import BookList from './BookList'

class App extends Component {
  render() {
    const list = [
      {
        title: 'first',
        length: 1
      },
      {
        title: 'second',
        length: 2
      }
    ]
    return (
      <BookList list={list} />
    );
  }
}

export default App;
