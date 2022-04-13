import React, {useState} from 'react';
import {View} from 'react-native';
import StartGameScreen from './screens/start-game-screen';
import GameScreen from './screens/game-screen';
import GameOverScreen from './screens/game-over-screen';
import {styles} from './styles';

const App = () => {
  const [userNumber, setUserNumber] = useState('');
  const [guessRounds, setGuessRounds] = useState('');

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const handleGameOver = numRounds => {
    setGuessRounds(numRounds);
  };

  const handleRestart = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userOptions={userNumber} onGameOver={handleGameOver} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        rounds={guessRounds}
        choice={userNumber}
        onRestart={handleRestart}
      />
    );
  }
  return <View style={styles.container}>{content}</View>;
};

export default App;
