import React, { useContext } from 'react';
import ValueContext from './ValueContext';
//import logo from './logo.svg';
//import './App.css';

function Child(props) {
  let value = useContext(ValueContext);
  return (
    <div >
      Child number {value}

  
    </div>
  );
}

export default Child;
