import React from 'react';
import './App.css';
import Card from "./components/card/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to my memory game! Try to only click each photo once!
        </p>
      </header>
      <div component={Card}></div>
    </div>
  );
}

export default App;
