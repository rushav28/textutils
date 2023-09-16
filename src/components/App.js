import React ,{useState} from 'react';
import './App.css';
import Header from "./Header";



import TextForm from './TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
function App() {
  const [mode , setmode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <div>
      <Header mode= {mode} toggleMode={toggleMode} />
      <div className='container'>
           
      
      <TextForm mode= {mode} />
      </div>
    </div>
  );
}

export default App;
 