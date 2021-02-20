import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Solid from './components/Solid'

function App() {
  const [elements, setElements] = useState(
    [
      { type: "plasma", name: "lightning"},
      { type: "plasma", name: "sun"},
      { type: "plasma", name: "stars"},
  ]
  
  )
  return (
    
    <div className="App">
      <Solid />
    </div>
  );
}

export default App;
