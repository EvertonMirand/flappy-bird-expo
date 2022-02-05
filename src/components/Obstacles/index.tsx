import React from 'react';

import { BottomContainer, TopContainer } from './styles';

// import { Container } from './styles';

type Props = {
  obstacleLeft: number;
  obstacleWidth: number;
  obstacleHeight: number;
  gap?: number;
};

const Obstacles: React.FC<Props> = ({
  obstacleWidth,
  obstacleHeight,
  gap = 50,
  obstacleLeft,
}) => {
  return (
    <React.Fragment>
      <TopContainer
        height={obstacleHeight}
        width={obstacleWidth}
        left={obstacleLeft}
        gap={gap}
      />
      <BottomContainer
        height={obstacleHeight}
        width={obstacleWidth}
        left={obstacleLeft}
      />
    </React.Fragment>
  );
};

export default Obstacles;
