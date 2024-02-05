import React from 'react';
import { useParams } from "react-router-dom";
import Carousel from './Carousel';
import logementsData from '../../datas/logements.json';


const Layout = () => {
    const { id } = useParams(); // Récupère l'id de l'URL
  
    // Utilisez logementsData et l'id pour trouver les informations du logement actuel
    const currentLogement = logementsData.find((logement) => logement.id === id);
  
    if (!currentLogement) {
      // Gérez le cas où le logement n'est pas trouvé (redirection vers une page d'erreur, par exemple)
      return <p>Logement introuvable</p>;
    }
  
    // Utilisez currentLogement.pictures pour afficher le carrousel d'images
  
    return (
        <div className="layout">
            <main>
                <Carousel images={currentLogement.pictures} />
                <div className='layout__info'>
                  <h2>{currentLogement.title}</h2>
                </div>
            </main>
        </div>
      );
  };
  
  export default Layout;
