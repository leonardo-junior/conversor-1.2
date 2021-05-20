import logo from '../logo.png';

function Navigator () {
    return (
        <nav className="navigator">
            <a href="/" className="top-shortcut"><img src={logo} alt="logo-click" className="top-shortcut" /></a>
            <a href="rgb" >Hex to RGB</a>
            <a href="hex" >RGB to Hex</a>
        </nav>
    );
}

export default Navigator;