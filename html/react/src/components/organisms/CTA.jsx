import React from 'react';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import DuckInfo from '../molecules/DuckInfo';

const CTA = () => {
  return (
    <div>
      <DuckInfo />
      <Image src="'../lib/img/imageduckinfo.png" alt="Patos mejorando su vida" />
      <Button onClick={() => window.open('url_de_mas_info', '_blank')}>Más info aquí</Button>
    </div>
  );
};

export default CTA;
