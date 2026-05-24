import "./Header.css"

function Header() {
  return (
    <header className="header">
        <h1 className="logo">SKILO</h1>
        <nav className="navbar">
            <ul>
                <li><a href="#home">Events</a></li>
                <li><a href="#about">Services</a></li>
                <li><a href="#services">Shop</a></li>
                <li><a href="#contact">Lessons</a></li>
                <li><a href="#contact">Training</a></li>
            </ul>
        </nav>
        <button>Contact Us</button>
    </header>
  );
}

export default Header;