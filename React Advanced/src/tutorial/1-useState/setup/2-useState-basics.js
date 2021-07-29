import React, { useState } from 'react';
// useState - function

const UseStateBasics = () => {
  const [text, setText] = useState(0);

  const handleClick = () => {
    setText(text+1);
  };

  return <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>change number</button>
  </React.Fragment>;
};

export default UseStateBasics;
