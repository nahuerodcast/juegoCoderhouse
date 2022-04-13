import {View, Text, Button, SafeAreaView, Alert} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {styles} from './styles';
import Header from '../../components/header';

const GameScreen = ({userOptions, onGameOver}) => {
  const generateRandomBetween = (min, max, exclude) => {
    min = Math.floor(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userOptions),
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userOptions) {
      onGameOver(rounds);
    }
  }, [currentGuess, userOptions, onGameOver]);

  const handlerNextGuess = direction => {
    if (
      (direction === 'lower' && currentGuess < userOptions) ||
      (direction === 'greater' && currentGuess > userOptions)
    ) {
      Alert.alert("Don't lie...");
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setRounds(current => current + 1);
  };

  return (
    <SafeAreaView>
      <Header title={'Guess the number 🤔'} />
      <View style={styles.card}>
        <Text>Oponents number:</Text>
        <Text style={styles.confirmedText}>{currentGuess}</Text>
        <View style={styles.buttonsContainer}>
          <Button title="Minor👇" onPress={() => handlerNextGuess('lower')} />
          <Button title="Major👆" onPress={() => handlerNextGuess('greater')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;
