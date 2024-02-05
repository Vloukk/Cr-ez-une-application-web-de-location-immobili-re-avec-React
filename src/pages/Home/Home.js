import React from 'react';
import Header from '../../components/Header/Header';
import HeroBanner from '../../components/Herobanner/HeroBanner';
import imgHomeBanner from '../../assets/img/hero_banner_img.png'
import Gallery from '../../components/Galery/Galery';
import Footer from '../../components/Footer/Footer';

function Home() {

  return (
    <div className='home'>
      <Header />
      <main>
        <HeroBanner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default Home;