import './App.css';
import CalculatorFrame from './displaySection/CalculatorFrame';
import { DisplayContext } from './components/DisplayContext';
import { useState } from 'react';

function App() {

  const [display, setDisplay] = useState("");

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      <div className="App">
        <CalculatorFrame />
      </div>
    </DisplayContext.Provider>
  );
}

export default App;
