import { Link, useMatch, useResolvedPath } from "react-router-dom"

import Plusprint from "../style/img/pluslogo.png"
import "../style/navbar.css"

function GetNavLink({url, children}) {
    const resolvedPath = useResolvedPath(url)
    const isActive = useMatch({ path: resolvedPath.pathname })
    return (
        <li className={`nav-item ${isActive ? "active" : ""}`}>
            <Link to={url} className="nav-link">
                {children}
            </Link>
        </li>
    )
}

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <GetNavLink url="/"><img src={Plusprint} className="pluslogo" alt="logo"/></GetNavLink>
                <GetNavLink url="/products">Produkter</GetNavLink>
                <GetNavLink url="/about">Om oss</GetNavLink>
            </ul>
        </nav>
    )
}