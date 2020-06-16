import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Child from './Child';
import Child2 from './Child2';

function Parent(props) {
  return (
    <div >
      Parent
      <Child></Child>
      <Child2></Child2>
  
    </div>
  );
}

export default Parent;
