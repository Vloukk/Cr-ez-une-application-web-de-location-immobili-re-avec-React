import React from 'react';
import Footer_logo from '../../assets/logo/logo_footer.png'

function Footer() {
  return (
    <div className='Footer'>
      <img className="Footer__logo" src={Footer_logo} alt="logo de l'agence kasa" />
      <div className='Footer__copyright'>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;