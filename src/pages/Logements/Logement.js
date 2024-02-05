import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';

function Logement() {

  return (
    <div className='Logement'>
      <Header />
      <main>
        <Layout />
      </main>
      <Footer />
    </div>
  );
}

export default Logement;