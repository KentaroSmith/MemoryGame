import React from 'react';
import './App.css';
import Card from "./components/card";
import Nav from "./components/nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <p>
          Welcome to my memory game! Try to only click each photo once!
        </p>
        <Card />
      </header>
    </div>
  );
}

export default App;
