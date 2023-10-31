import React from 'react';
import TextForm from './TextForm';


function Home({ alert,
  mode,
  showAlert }) {
  return (
    <div>
      <h1 style={{ color: mode === 'dark' ? '#fff' : '#000' }}>Enter text to anaylze</h1>
      <TextForm alert={alert} mode={mode} showAlert={showAlert} />
    </div>
  )
}

export default Home
