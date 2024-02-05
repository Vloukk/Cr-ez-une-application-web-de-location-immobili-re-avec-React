
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const NotFound = () => {

  return (
    <div className='Error'>
        <Header />
        <main>
            <div className='Error__container' >
                <h1 className='Error__title'>404</h1>
                <p className='Error__text'>Oups! La page que vous demandez n'existe pas.</p>
                <Link className="Error__link" to="/">Retourner sur la page d’accueil</Link>
            </div>
        </main>
        <Footer />
    </div>
  );
};

export default NotFound;
