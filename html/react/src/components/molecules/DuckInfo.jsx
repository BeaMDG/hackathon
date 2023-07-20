import React from 'react';
import Image from '../atoms/Image';

const DuckInfo = () => {
  return (
    <div>
      <p>Sabías que... El 10% del precio de cualquier producto va destinado a las reservas protegidas de patos</p>
      <Image src="ruta_de_la_imagen1.jpg" alt="Patos protegidos" />
      <p>Ayúdanos junto a la Organización WWF a mejorar tus colecciones de patos y a mejorar la vida de ellos!!</p>
    </div>
  );
};

export default DuckInfo;
