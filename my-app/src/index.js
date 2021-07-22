import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return <h4>this is component</h4>;
}

// const GreetingT = () => {
//   return React.createElement('h4', {}, 'this is component');
// };

ReactDom.render(<Greeting />, document.getElementById('root'));