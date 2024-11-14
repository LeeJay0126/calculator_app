import './App.css';
import CalculatorFrame from './displaySection/CalculatorFrame';
import { DisplayContext } from './components/DisplayContext';
import { useState } from 'react';
import { MemoryContext } from './components/MemoryContext';
import { ResultContext } from './components/ResultContext';

function App() {

  const [display, setDisplay] = useState("");
  const [memory, setMemory] = useState(0);
  const [result, setResult] = useState("");

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      <MemoryContext.Provider value={{ memory, setMemory }}>
        <ResultContext.Provider value={{ result, setResult }}>
          <div className="App">
            <CalculatorFrame />
          </div>
        </ResultContext.Provider>
      </MemoryContext.Provider>
    </DisplayContext.Provider>
  );
}

export default App;
