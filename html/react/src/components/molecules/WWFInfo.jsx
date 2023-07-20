import React from 'react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const WWFInfo = () => {
  return (
    <div>
       <Text>
        Ayudanos junto a la Organizacion WWF a aumentar tu coleccion de patos y a mejorar la vida de ellos!!
      </Text>  
      <Button text="Más info aquí" onClick={() => window.open('https://www.example.com')} />
    </div>
  );
};

export default WWFInfo;