import React, { useContext, useReducer } from 'react';
import ValueContext from './ValueContext';

//import logo from './logo.svg';
//import './App.css';

function Child(props) {
  
  let value = useContext(ValueContext);
  return (
    <div >
      Child number {value}
      <button onClick={ () => {value[1]( ++value[0])}}>Update number</button>

  
    </div>
  );
}

export default Child;
