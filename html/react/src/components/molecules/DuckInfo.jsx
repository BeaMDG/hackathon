import React from 'react';
import Image from '../atoms/Image';

const DuckInfo = () => {
  return (
    <section>
    <div className='main-text'>
      <h1>Sabías que...</h1>
    <p> El 10% del precio de cualquier producto va destinado a las reservas protegidas de patos</p>
    </div>
    <div className='main-image'>
    <Image src="ruta_de_la_imagen1.jpg" alt="Patos protegidos" />
    </div>
      <div>
      <p>Ayúdanos junto a la Organización WWF a mejorar tus colecciones de patos y a mejorar la vida de ellos!!</p>
      </div> 

    </section>
  );
};

export default DuckInfo;
