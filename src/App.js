import { useState } from 'react';
import './App.css';
import { getMood } from './helper/getMood';

function App() {
  let [mood, setMood] = useState('good');

  const clickHandler = () => {
    setMood((prevMood) => getMood(prevMood));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Cannot decide what mood do you have today? This might help!</h2>
        <p>
          Today you have a very <span data-testid="mood">{mood}</span> mood!
        </p>
        <button data-testid="surpriseButton" onClick={clickHandler}>
          Reveal!
        </button>
      </header>
    </div>
  );
}

export default App;
