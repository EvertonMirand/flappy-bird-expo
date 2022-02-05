import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import Bird from './src/components/Bird';
import Obstacles from './src/components/Obstacles';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const birdLeft = screenWidth / 2;
const gravity = 3;
const obstacleWidth = 60;
const obstacleHeight = 300;
const gap = 200;

const getRandomBottom = () => -Math.random() * 100;

const checkCollision = (
  birdBottom: number,
  obstaclesLeft: number,
  obstaclesNegHeight: number,
) =>
  (birdBottom < obstaclesNegHeight + obstacleHeight + 30 ||
    birdBottom > obstaclesNegHeight + obstacleHeight + gap - 30) &&
  obstaclesLeft > screenWidth / 2 - 30 &&
  obstaclesLeft < screenWidth / 2 + 30;

export default function App() {
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeft2, setObstaclesLeft2] = useState(
    screenWidth + screenWidth / 2 + 30,
  );
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(
    -Math.random() * 100,
  );
  const [obstaclesNegHeight2, setObstaclesNegHeight2] = useState(
    -Math.random() * 100,
  );

  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  let gameTimerId: NodeJS.Timer;
  let obstaclesLeftTimerId: NodeJS.Timer;
  let obstaclesLeftTimerId2: NodeJS.Timer;

  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((value) => value - gravity);
      }, 30);

      return () => {
        clearInterval(gameTimerId);
      };
    }
    //if i dont have birdBottom as a dependecy, it wont stop
  }, [birdBottom]);

  const jump = () => {
    if (!isGameOver && birdBottom < screenHeight) {
      setBirdBottom((value) => value + 50);
    }
  };

  useEffect(() => {
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft((value) => value - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesLeftTimerId);
      };
    } else {
      setScore((score) => score + 1);
      setObstaclesLeft(screenWidth);
      setObstaclesNegHeight(getRandomBottom());
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
      setScore((score) => score + 1);
      setObstaclesLeft2(screenWidth);
      setObstaclesNegHeight2(getRandomBottom());
    }
  }, [obstaclesLeft2]);

  const gameOver = () => {
    clearInterval(gameTimerId);
    clearInterval(obstaclesLeftTimerId);
    clearInterval(obstaclesLeftTimerId2);
    setIsGameOver(true);
  };

  useEffect(() => {
    if (
      checkCollision(birdBottom, obstaclesLeft, obstaclesNegHeight) ||
      checkCollision(birdBottom, obstaclesLeft2, obstaclesNegHeight2)
    ) {
      console.log('here');
      gameOver();
    }
  }, [
    birdBottom,
    obstaclesLeft,
    obstaclesNegHeight,
    obstaclesLeft2,
    obstaclesNegHeight2,
  ]);

  return (
    <TouchableWithoutFeedback onPress={jump}>
      <View style={styles.container}>
        {isGameOver && <Text style={{ fontSize: '30px' }}>{score}</Text>}
        <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
        <Obstacles
          obstacleHeight={obstacleHeight}
          obstacleLeft={obstaclesLeft}
          obstacleWidth={obstacleWidth}
          randomBottom={obstaclesNegHeight}
          gap={gap}
        />
        <Obstacles
          obstacleHeight={obstacleHeight}
          obstacleLeft={obstaclesLeft2}
          obstacleWidth={obstacleWidth}
          randomBottom={obstaclesNegHeight2}
          gap={gap}
          color="red"
        />
      </View>
    </TouchableWithoutFeedback>
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
