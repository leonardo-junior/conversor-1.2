import logo from '../logo.png';
import { Link } from 'react-router-dom';

function Navigator () {
    return (
        <nav className="navigator">
            <Link to="/" className="top-shortcut"><img src={logo} alt="logo-click" className="top-shortcut" /></Link>
            <Link to="rgb" >Hex to RGB</Link>
            <Link to="hex" >RGB to Hex</Link>
        </nav>
    );
}

export default Navigator;