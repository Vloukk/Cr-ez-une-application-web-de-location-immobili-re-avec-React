import logo from "../../assets/logo/logo.svg";
import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();
  
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </Link>
      <nav>
        <NavLink to="/" className={location.pathname === "/" ? "active-link" : ""} >Accueil</NavLink>
        <NavLink to="/a-propos" className={location.pathname === "/a-propos" ? "active-link" : ""} >À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;