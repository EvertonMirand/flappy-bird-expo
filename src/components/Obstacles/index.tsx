import React from 'react';

import { BottomContainer, TopContainer } from './styles';

// import { Container } from './styles';

type Props = {
  obstacleLeft: number;
  obstacleWidth: number;
  obstacleHeight: number;
  gap?: number;
  color?: string;
};

const Obstacles: React.FC<Props> = ({
  obstacleWidth,
  obstacleHeight,
  gap = 50,
  obstacleLeft,
  color = 'green',
}) => {
  return (
    <React.Fragment>
      <TopContainer
        height={obstacleHeight}
        width={obstacleWidth}
        left={obstacleLeft}
        gap={gap}
        color={color}
      />
      <BottomContainer
        height={obstacleHeight}
        width={obstacleWidth}
        left={obstacleLeft}
        color={color}
      />
    </React.Fragment>
  );
};

export default Obstacles;
