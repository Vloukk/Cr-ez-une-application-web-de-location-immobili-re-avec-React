import logo from "../../assets/logo/logo.svg";
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo de l'agence kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À Propos</Link>
      </nav>
    </header>
  );
}

export default Header;