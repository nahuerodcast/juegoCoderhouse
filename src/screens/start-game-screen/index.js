import {SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Header from '../../components/header';
import Card from '../../components/card';

const StartGameScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Guess the number 🤔'} />
      <Card />
    </SafeAreaView>
  );
};

export default StartGameScreen;
