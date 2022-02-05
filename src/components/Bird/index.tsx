import React from 'react';

import { Container } from './styles';

type Props = {
  birdBottom: number;
  birdLeft: number;
};

const width = 50;
const height = 60;

const Bird: React.FC<Props> = ({ birdLeft, birdBottom }) => {
  return (
    <Container
      style={{
        left: birdLeft - width / 2,
        bottom: birdBottom - height / 2,
        width,
        height,
      }}
    />
  );
};

export default Bird;
