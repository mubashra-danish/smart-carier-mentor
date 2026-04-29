import React from 'react'
import { useContext,useEffect} from 'react'
import { ThemeContext } from '../context/ThemeContext'
const Login = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
  const handleLogin = (e) =>{
    e.preventDefault()
    console.log("loginn")
  }
 useEffect(() => {
    document.body.className = theme
  }, [theme])
  return (
    <div className="container">
      <form onSubmit={handleLogin} className='form'>
        <h2>Login</h2>

        <input type="email" placeholder="Enter Email" required />
        <input type="password" placeholder="Enter Password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login