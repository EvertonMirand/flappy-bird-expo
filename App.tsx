import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Bird from './src/components/Bird';
import Obstacles from './src/components/Obstacles';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const birdLeft = screenWidth / 2;
const gravity = 3;
const obstacleWidth = 60;
const obstacleHeight = 300;
const gap = 200;

export default function App() {
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeft2, setObstaclesLeft2] = useState(
    screenWidth + screenWidth / 2 + 30,
  );

  let gameTimerId: NodeJS.Timer;
  let obstaclesLeftTimerId: NodeJS.Timer;
  let obstaclesLeftTimerId2: NodeJS.Timer;

  // Start bird falling
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((value) => value - gravity);
      }, 30);
    }
    return () => {
      clearInterval(gameTimerId);
    };
  }, [birdBottom]);

  useEffect(() => {
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft((value) => value - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesLeftTimerId);
      };
    } else {
      setObstaclesLeft(screenWidth);
    }
  }, [obstaclesLeft]);

  useEffect(() => {
    if (obstaclesLeft2 > -obstacleWidth) {
      obstaclesLeftTimerId2 = setInterval(() => {
        setObstaclesLeft2((value) => value - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesLeftTimerId2);
      };
    } else {
      setObstaclesLeft2(screenWidth);
    }
  }, [obstaclesLeft2]);

  return (
    <View style={styles.container}>
      <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
      <Obstacles
        obstacleHeight={obstacleHeight}
        obstacleLeft={obstaclesLeft}
        obstacleWidth={obstacleWidth}
        gap={gap}
      />
      <Obstacles
        obstacleHeight={obstacleHeight}
        obstacleLeft={obstaclesLeft2}
        obstacleWidth={obstacleWidth}
        gap={gap}
        color="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
