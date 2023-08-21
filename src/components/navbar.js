import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

import Plusprint from "../style/img/pluslogo.png";
import "../style/css/components/navbar.css";
import ProductsNav from "./productsNav";

function GetNavLink({ url, children }) {
  const resolvedPath = useResolvedPath(url);
  const isActive = useMatch({ path: resolvedPath.pathname });

  return (
    <li className={`nav-item ${isActive ? "active" : ""}`}>
      <Link to={url} className="nav-link">
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isIconUp, setIsIconUp] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const productsNav = document.getElementById("productsNav");

      if (
        productsNav &&
        !productsNav.contains(event.target) &&
        event.target !== document.getElementById("productsBtn")
      ) {
        setIsHovered(false);
      }
    };

    const handleClickInside = (event) => {
      const productsNavLinks = document.querySelectorAll(".productsNav a");

      if (Array.from(productsNavLinks).includes(event.target)) {
        setIsHovered(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("click", handleClickInside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("click", handleClickInside);
    };
  }, []);

  const handleClick = (event) => {
    event.stopPropagation();
    setIsHovered((prevState) => !prevState);
    setIsIconUp((prevState) => !prevState);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <GetNavLink url="/">
            <img src={Plusprint} className="pluslogo" alt="logo" />
          </GetNavLink>
          <div id="productsBtn" className="nav-item productsBtn" onClick={handleClick}>
            Produkter
            &nbsp;
            {isIconUp ? 
              <IoChevronUp className="icon up fade-in" />
            : 
              <IoChevronDown className="icon fade-in" />
            }
          </div>
          <GetNavLink url="/about">Om oss</GetNavLink>
          <GetNavLink url="/faq">Frågor?</GetNavLink>
        </ul>
      </nav>
      {isHovered && (
        <div id="productsNav">
          <ProductsNav isHovered={isHovered} setIsHovered={setIsHovered}/>
        </div>
      )}
    </div>
  );
}
