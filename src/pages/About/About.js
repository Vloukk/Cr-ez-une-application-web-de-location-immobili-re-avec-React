import React from 'react';
import Header from '../../components/Header/Header';
import HeroBanner from '../../components/Herobanner/HeroBanner';
import imgAboutBanner from '../../assets/img/hero_banner_img_about.png'
import Collapse from '../../components/Collapse/Collapse'
import CollapseData from '../../datas/Collapse.json'
import Footer from '../../components/Footer/Footer';

function About() {
  return (
    <div>
      <Header />
      <main>
        <HeroBanner image={imgAboutBanner} />
        <div className="collapse__dropdown">
          {CollapseData.map((item) => (
            <div key={item.id}>
              <Collapse content={item.content} title={item.title} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;