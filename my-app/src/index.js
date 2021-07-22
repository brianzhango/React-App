import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// JSX (return single element)

// setup vars
const firstBook = {
  title: 'When We Believed in Mermaids: A Novel',
  author:'Barbara ONeal',
  image: 'https://m.media-amazon.com/images/I/81FJvwYyqgL._AC_UL640_FMwebp_QL65_.jpg',
}

function BookList() {
  return <section className='booklist'> 
    <Book title = 'The Secrets We Keep: A gripping emotional page turner' author = 'Kate Hewitt' image = 'https://m.media-amazon.com/images/I/915IPRMVw1L._AC_UL640_FMwebp_QL65_.jpg'/>
    <Book title = {firstBook.title} author = {firstBook.title} image = {firstBook.image}/>
  </section >;
}

const Book = (props) =>{
  return (
  <article className='book'>
    <img src = {props.image} alt="" />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>)
};

ReactDom.render(<BookList />, document.getElementById('root'));