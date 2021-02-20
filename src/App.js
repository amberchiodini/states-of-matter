import React, {useState} from 'react';
import './App.css';
import Solid from './components/Solid'
import { MatterContext } from './MatterContext';

function App() {
  const [elements, setElements] = useState(
    [
      { type: "plasma", name: "lightning"},
      { type: "plasma", name: "sun"},
      { type: "plasma", name: "stars"},
  ]
  )

  return (
    <MatterContext.Provider value={elements}>
      <div className="App">
        <Solid />
      </div>
    </MatterContext.Provider>
    
  );
}

export default App;
