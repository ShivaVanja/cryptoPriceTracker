
import Home from './components/Home'
import Navbar from './components/Navbar'
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={ darkMode ? 'dark' : '' }>
       
    <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
    <Home/>
       
    </div>
  )
}

export default App
