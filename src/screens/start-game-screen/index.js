import {SafeAreaView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Header from '../../components/header';
import Card from '../../components/card';

const StartGameScreen = ({onStartGame}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header title={'Guess the number 🤔'} />
        <Card onStartGame={onStartGame} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
