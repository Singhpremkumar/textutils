// import Product from "./src/Product"
// import Description from "./description";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import React, { useState } from 'react';
import Home from "./components/Home";




function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert(" Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.background = 'white';
      showAlert(" Light mode has been enabled", "success")

    }
  }

  const toggleMode1 = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.background = 'Red';
      showAlert(" Red mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.background = 'white';
      showAlert(" Light mode has been enabled", "success")

    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" AboutText="About" Mode={Mode} toggleMode={toggleMode} toggleMode1={toggleMode1} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Home alert={alert} mode={Mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
