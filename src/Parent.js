import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Child from './Child';

function Parent(props) {
  return (
    <div >
      Parent
      <Child num = {props.num}></Child>
  
    </div>
  );
}

export default Parent;
