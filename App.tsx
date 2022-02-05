import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Bird from './src/components/Bird';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const birdLeft = screenWidth / 2;
const gravity = 3;

export default function App() {
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  let gameTimerId: NodeJS.Timer;

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

  return (
    <View style={styles.container}>
      <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
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
