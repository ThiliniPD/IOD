import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
//import { MyThemeContext } from '../context/MyThemeContext'
//import ThemeSwitcher from './ThemeSwitcher';

export default function NavBar() {
 //const {theme} = useContext(MyThemeContext);
 //const {theme} = useMyThemeContext()

 return (
    <nav className="NavBar" >
        <ul className="menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/bitcoin">Bitcoin</NavLink></li>
        </ul> 
    </nav>
 )
}
