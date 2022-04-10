import React, {useState} from 'react';
import {View} from 'react-native';
import StartGameScreen from './screens/start-game-screen';
import GameScreen from './screens/game-screen';
import {styles} from './styles';

const App = () => {
  const [userNumber, setUserNumber] = useState('');

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber) {
    content = <GameScreen userOptions={userNumber} />
  }
  return <View style={styles.container}>{content}</View>;
};

export default App;
