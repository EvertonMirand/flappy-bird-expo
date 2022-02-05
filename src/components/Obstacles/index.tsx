import React from 'react';

import { BottomContainer, TopContainer } from './styles';

// import { Container } from './styles';

type Props = {
  obstacleLeft: number;
  obstacleWidth: number;
  obstacleHeight: number;
  gap?: number;
  color?: string;
  randomBottom: number;
};

const Obstacles: React.FC<Props> = ({
  obstacleWidth,
  obstacleHeight,
  gap = 50,
  obstacleLeft,
  color = 'green',
  randomBottom = 0,
}) => {
  return (
    <React.Fragment>
      <TopContainer
        height={obstacleHeight}
        width={obstacleWidth}
        left={obstacleLeft}
        gap={gap}
        color={color}
        randomBottom={randomBottom}
      />
      <BottomContainer
        height={obstacleHeight}
        width={obstacleWidth}
        left={obstacleLeft}
        color={color}
        randomBottom={randomBottom}
      />
    </React.Fragment>
  );
};

export default Obstacles;
