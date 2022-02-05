import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Bird from './src/components/Bird';
import Obstacles from './src/components/Obstacles';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const birdLeft = screenWidth / 2;
const gravity = 3;

export default function App() {
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  let gameTimerId: NodeJS.Timer;
  let obstaclesLeftTimerId: NodeJS.Timer;

  const obstacleWidth = 60;
  const obstacleHeight = 300;
  const gap = 50;

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
    }

    return () => {
      clearInterval(obstaclesLeftTimerId);
    };
  }, [obstaclesLeft]);

  return (
    <View style={styles.container}>
      <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
      <Obstacles
        obstacleHeight={obstacleHeight}
        obstacleLeft={obstaclesLeft}
        obstacleWidth={obstacleWidth}
        gap={gap}
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
