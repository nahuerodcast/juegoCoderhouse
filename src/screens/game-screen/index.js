import {View, Text, Button, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const GameScreen = ({userOptions}) => {
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

  return (
    <SafeAreaView>
      <Text>GameScreen</Text>
      <Text>{currentGuess}</Text>
      <View>
        <Button title="Minor" onPress={() => null} />
        <Button title="Major" onPress={() => null} />
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;
