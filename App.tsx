import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Bird from './src/components/Bird';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const birdLeft = screenWidth / 2;

export default function App() {
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);

  return (
    <View style={styles.container}>
      <Bird />
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
