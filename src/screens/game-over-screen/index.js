import React from 'react';
import {SafeAreaView, Text, Image, View, Button} from 'react-native';
import {styles} from './styles';
import '../../../assets/images/game-over.png';

const GameOverScreen = ({rounds, choice, onRestart}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.gameOver}>Game Over👾</Text>
      <View style={styles.card}>
        <Text style={styles.tries}>Tries: {rounds}</Text>
        <Text style={styles.tries}>Tries: {choice}</Text>
      </View>
      <Button title={'Restart'} onPress={onRestart} />
    </SafeAreaView>
  );
};

export default GameOverScreen;
