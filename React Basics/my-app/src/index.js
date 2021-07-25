import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import {books} from './books'
import Book from './Book'
// JSX (return single element)


function BookList() {
  return <section className='booklist'> 
    {books.map((book) => {
      return (
      <Book key = {book.id} {...book}></Book>
      );
    })}
  </section >;
}

// JS props destructuring

// const clickHandler = () => {
//   alert("hello world");
// }


ReactDom.render(<BookList />, document.getElementById('root'));