import { useState } from 'react';
import './App.css';
import { getMood } from './helper/getMood';

function App() {
  let [mood, setMood] = useState('jó');

  const clickHandler = () => {
    setMood((prevMood) => getMood(prevMood));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Ma nagyon <span data-testid="mood">{mood}</span> napom van!
        </p>
        <button data-testid="surpriseButton" onClick={clickHandler}>
          Meglepetés :)
        </button>
      </header>
    </div>
  );
}

export default App;
