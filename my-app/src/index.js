import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// JSX (return single element)

// setup vars
const books = [

  {
    title: 'The Secrets We Keep: A gripping emotional page turner',
    author:'Kate Hewitt',
    image: 'https://m.media-amazon.com/images/I/915IPRMVw1L._AC_UL640_FMwebp_QL65_.jpg',
  },
  {
    title: 'When We Believed in Mermaids: A Novel',
    author:'Barbara ONeal',
    image: 'https://m.media-amazon.com/images/I/81FJvwYyqgL._AC_UL640_FMwebp_QL65_.jpg',
  },
  {
    title: 'Broken',
    author:'Don Winslow',
    image: 'https://m.media-amazon.com/images/I/81AV8ZCXD9L._AC_UL640_FMwebp_QL65_.jpg',
  },
];

function BookList() {
  return <section className='booklist'> 
    {books.map((book) => {
     // const {image, title, author} = book;
      return (
      <Book book={book}></Book>
      );
    })}
  </section >;
}

// JS props destructuring

const Book = (props) =>{
  const {image, title, author} = props.book;
  return (
  <article className='book'>
    <img src = {image} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>)
};

ReactDom.render(<BookList />, document.getElementById('root'));