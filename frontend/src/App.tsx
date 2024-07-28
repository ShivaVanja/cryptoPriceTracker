
import Home from './components/Home'
import Navbar from './components/Navbar'
import { useState } from 'react';

function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={lightMode ? 'light-mode' : 'dark-mode'}>
       
    <Navbar setLightMode={setLightMode} lightMode={lightMode}/>
    <Home/>
       
    </div>
  )
}

export default App
