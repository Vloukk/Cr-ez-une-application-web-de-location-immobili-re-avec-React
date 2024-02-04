import React from 'react';
import Header from '../../components/Header/Header';
import HeroBanner from '../../components/Herobanner/HeroBanner';
import imgHomeBanner from '../../assets/img/hero_banner_img.png'
import Gallery from '../../components/Galery/Galery';

function Home() {

  return (
    <div>
      <Header />
      <HeroBanner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
      <Gallery />
    </div>
  );
}

export default Home;