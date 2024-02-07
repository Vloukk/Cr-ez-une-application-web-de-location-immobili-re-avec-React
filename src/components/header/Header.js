import logo from "../../assets/logo/logo.svg";
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();
  
  return (
    <header>
      <img className="logo" src={logo} alt="logo de l'agence kasa" />
      <nav>
        <NavLink to="/" className={location.pathname === "/" ? "active-link" : ""} >Accueil</NavLink>
        <NavLink to="/a-propos" className={location.pathname === "/a-propos" ? "active-link" : ""} >À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;