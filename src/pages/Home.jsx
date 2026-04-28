// import React from 'react'
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
const Home = () => {
const { theme, toggleTheme } = useContext(ThemeContext)
  return (
<div style={{ color: theme === 'light' ? 'black' : 'white',
              backgroundColor: theme === 'light' ? 'white' : 'black' }}>
      HELLOOO HOMEEEEE
        <h1>{theme} mode</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default Home