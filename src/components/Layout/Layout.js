import React from 'react';
import { useParams } from "react-router-dom";
import Carousel from './Carousel';
import Collapse from '../Collapse/Collapse';
import Tag from './Tag';
import Rate from './Rate';
import logementsData from '../../datas/logements.json';



const Layout = () => {
    const { id } = useParams(); // Récupère l'id de l'URL
  
    // Utilisez logementsData et l'id pour trouver les informations du logement actuel
    const currentLogement = logementsData.find((logement) => logement.id === id);
  
    if (!currentLogement) {
      // Gérez le cas où le logement n'est pas trouvé (redirection vers une page d'erreur, par exemple)
      return <p>Logement introuvable</p>;
    }
  
    /* Tags */
    const tagsLogement = currentLogement?.tags.map((tag, i) => <Tag key={i} nom={tag} />);

    /* Rate */
    const rateLogement = <Rate nombreEtoiles={parseInt(currentLogement?.rating)} />;

    /* Host */

    const hostInfo = currentLogement?.host;
    
    const hostName = hostInfo?.name;
    
    const hostPicture = hostInfo?.picture;

  
    return (
        <div className="layout">
          <Carousel images={currentLogement.pictures} />
          <div className='layout__container'>
            <div className='layout__info'>
                <h2>{currentLogement.title}</h2>
                <p>{currentLogement.location}</p>
                <div className='layout__tag'>{tagsLogement}</div>
              </div>
              <div className='layout__description'>
                <div className='layout__rate'>{rateLogement}</div>
                <div className='layout__host'>
                  <div className='layout__host__name'>{hostName}</div>
                  <img src={hostPicture} alt={hostName} className="layout__host__img" />
                </div>
              </div>
            </div>
            <div className='layout__collapse'>
              {currentLogement && (
                <>
                  <Collapse title="Description" content={currentLogement.description} className='layout__collapse__description' />
                  <Collapse title="Équipements" content={currentLogement.equipments.join(', ')} className='layout__collapse__equipement' />
                </>
              )}
            </div>
        </div>
      );
  };
  
  export default Layout;
