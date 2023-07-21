import React from 'react';
import DuckInfo from '../molecules/DuckInfo';
import WWFInfo from '../molecules/WWFInfo';
import Text from '../atoms/Text';

const DuckCollection = () => {
  return (
    <div>
      <Text/>
      <DuckInfo />
      <WWFInfo />
    </div>
  );
};

export default DuckCollection;