import React from 'react';
import Text from '../atoms/Text';
import Image from '../atoms/Image';

const DuckInfo = () => {
  return (
    <div>
      <Text>
        Sabias que...El 10% del precio de cualquier producto va destinado a las reservas protegidas de los patos.
      </Text>
      <Image src="src/assets/image-dinfo/imageduckinfo.png" alt="Duck Info" />
      <Text>
        Ayudanos junto a la Organizacion WWF a aumentar tu coleccion de patos y a mejorar la vida de ellos!!
      </Text>
    </div>
  );
};

export default DuckInfo;