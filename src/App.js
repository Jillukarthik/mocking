import { useState } from 'react';
import "./App.css"
function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count=>count + 1);
  }

  function handleDecrement() {
    setCount(count=>count - 1);
  }

  return (
    <div className='app'>
      <h1>mocking</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
