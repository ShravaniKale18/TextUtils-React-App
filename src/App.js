import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';

function App(props) {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1b244f';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light'); 
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    },
    setTimeout(() => {
      setAlert(null);
    }, 1500))
  }
  return (
    <>
      <Navbar mode={mode}
        toggleMode={toggleMode}
        title="TextUtils"
        homeText="Home"
        aboutText="About TextUtils"
      />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
