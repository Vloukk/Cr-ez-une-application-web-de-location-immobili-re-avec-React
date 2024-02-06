import logo from "../../assets/logo/logo.svg";
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo de l'agence kasa" />
      <nav>
        <NavLink to="/" activeClassName="active">Accueil</NavLink>
        <NavLink to="/a-propos" activeClassName="active">À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;