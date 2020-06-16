import React, { useContext, useReducer } from 'react';
//import ValueContext from './ValueContext';
//import logo from './logo.svg';
//import './App.css';
import numberReducer from './numberReducer';

function Child2() {
    let [state, dispatch] = useReducer(numberReducer, 52);
    
  
  return (
    <div >
     Child 2 {state}
     <button onClick = {() => { dispatch({type:"INCREMENT", val : 30})}}>Increment</button>
     <button onClick = {() => { dispatch({type:"DECREMENT", val : 30})}}>Decrement</button>
    </div>
  );
}

export default Child2;
