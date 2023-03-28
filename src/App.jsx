import './App.css'
import React, { useState } from 'react'
import  { useContextLanguage, languages } from './Context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  const { language, setLanguage } = useContextLanguage(languages.english)
  const handleChangeLA = (event) => {
    event.preventDefault()         
    if (language.id == languages.english.id) setLanguage(languages.spanish)
    if (language.id == languages.spanish.id) setLanguage(languages.portuguese)
    if (language.id == languages.portuguese.id) setLanguage(languages.english)        
  }

  return (
    <div className="App">
      <>
        <Navbar handleChangeLA = {handleChangeLA}/>
        <Body />
      </>
    </div>
  )
}

export default App