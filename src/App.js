import React from 'react';
import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar'

function App() {
  const user = {
    nombre:'Estefanía',
    edad:33,
    color:'cyan'
  }

  const saludarFn = (name) => {
    console.log("Hola " + name);
  }


  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Saludar userInfo={user} saludarFn={saludarFn} />
    </div>
  );
}

export default App;
