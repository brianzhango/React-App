import React from 'react'

const Book = (props) =>{
  const {image, title, author} = props;
  return (
  <article className='book'>
    <img src = {image} alt="" />
    <h1 onClick={()=>{alert("hello world")}}>{title}</h1>
    <h4>{author}</h4>
  </article>)
}

export default Book