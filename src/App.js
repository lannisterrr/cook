import React, { useState } from 'react'; // because it is a function component
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
  console.log('render app');
  const [theme, setTheme] = useState('green');
  // theme:red
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0}></Counter>
      Counter Hooks
      <CounterHooks initialCount={0} />
      <button
        onClick={() =>
          setTheme(prevTheme => {
            return prevTheme === 'red' ? 'blue' : 'red';
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
