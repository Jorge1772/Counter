import React, { useState } from 'react'
import CounterHooks from './Counter'


export const ThemeContext = React.createContext()


function App() {
  const [theme,setTheme] = useState('red')
  return (

    
   <ThemeContext.Provider value={{backgroundColor: theme  }}>
   Counter
   <CounterHooks initialCount={0}/>
   <button onClick={() => setTheme(prevTheme => {
     return prevTheme === 'red'? 'blue' : 'red'
   }) }> Toggle</button>
   </ThemeContext.Provider>
  );
}

export default App;
