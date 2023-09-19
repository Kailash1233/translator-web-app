import React from 'react'
import Logo from "./Kailu.png"
import './App.css'

function Header() {
  return (
    <div>
      <header>
        <img src={Logo} className='App-logo' alt='alt'></img>
      <h1>Language Translator Web App</h1>
      </header>
    </div>
  )
}

export default Header
