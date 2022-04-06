import React from 'react';
import {View} from 'react-native';
import StartGameScreen from './screens/start-game-screen';
import {styles} from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <StartGameScreen />
    </View>
  );
};

export default App;
