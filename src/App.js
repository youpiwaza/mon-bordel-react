import logo from './logo.svg';
import './App.css';
import React from 'react';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Welcome name="Maxime"></Welcome>
        <Welcome name="Bob"></Welcome>
        <Welcome poil="hey"></Welcome>

      </header>
    </div>
  );
}

export default App;
