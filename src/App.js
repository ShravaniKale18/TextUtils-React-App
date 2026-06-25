import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App(props) {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1b244f';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
}
  return (
    <>
      <Navbar mode={mode}
        toggleMode={toggleMode}
        title="TextUtils"
        homeText="Home"
        aboutText="About TextUtils"
      />
      <div className="container my-3">
        <TextForm heading="Enter the text"/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
