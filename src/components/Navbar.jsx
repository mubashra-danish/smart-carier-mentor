import { useNavigate, Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
const Navbar = () => {
  const navigate = useNavigate()
  const { theme,toggleTheme } = useContext(ThemeContext)
  return (
    <nav className="navbar">
      
      <div className="logo" onClick={() => navigate('/')}>
        MySite
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button style={{marginLeft:"10px"}} onClick={toggleTheme}>  {theme === 'light' ? 'Dark' : 'Light'}</button>
      </div>

    </nav>
  )
}

export default Navbar