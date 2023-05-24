import "../style/navbar.css"

export function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">Produkter</a>
                </li>
                <li className="nav-item">
                    <a href="/services" className="nav-link">Kontakt</a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link">Om mig</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar