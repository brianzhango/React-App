import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// JSX (return single element)

function BookList() {
  return <section className='booklist'> 
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section >;
}

const Book = () =>{
  return (
  <article className='book'>
    <Image />
    <Title />
    <Author />
  </article>)
};

const Image = () => <img src = "https://m.media-amazon.com/images/I/915IPRMVw1L._AC_UL640_FMwebp_QL65_.jpg" alt="" />

const Title = () => <h1>The Secrets We Keep: A gripping emotional page turner</h1>

const Author = () => <h4 style={{ color: '#617d98', fontSize: '1rem', marginTop: '0.25rem' }}>
    Kate Hewitt
  </h4>

ReactDom.render(<BookList />, document.getElementById('root'));