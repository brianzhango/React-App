import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// JSX (return single element)

// setup vars
const firstBook = {
  title: 'The Secrets We Keep: A gripping emotional page turner',
  author:'Kate Hewitt',
  image: 'https://m.media-amazon.com/images/I/915IPRMVw1L._AC_UL640_FMwebp_QL65_.jpg',
}
const secondBook = {
  title: 'When We Believed in Mermaids: A Novel',
  author:'Barbara ONeal',
  image: 'https://m.media-amazon.com/images/I/81FJvwYyqgL._AC_UL640_FMwebp_QL65_.jpg',
}

function BookList() {
  return <section className='booklist'> 
    <Book title = {firstBook.title} author = {firstBook.title} image = {firstBook.image}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente, sed ipsa cumque quas veniam consequatur culpa modi autem labore, in hic, explicabo natus eum quos perspiciatis nobis quaerat corrupti!
      </p>
    </Book>
    <Book title = {secondBook.title} author = {secondBook.title} image = {secondBook.image}/>
  </section >;
}

// JS props destructuring

// children
const Book = ({image, title, author, children}) =>{
  //const {image, title, author} = props;
  return (
  <article className='book'>
    <img src = {image} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>)
};

ReactDom.render(<BookList />, document.getElementById('root'));