import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/Login">Login</Link>
                <Link to="/Registro">Registro</Link>
                <Link to="/Dashboard">Home</Link>
            </nav>
        </header>
    )
}

export default Header