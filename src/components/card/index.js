import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';

import Input from '../input';

const Card = ({onStartGame}) => {
  const [inputValue, setInputValue] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleOnChange = text => {
    setInputValue(text.replace(/[^0-9]/g, ''));
  };

  const handleOnClear = () => {
    setInputValue('');
    setConfirmed(false);
  };

  const handleConfirmInput = () => {
    const chosenNumber = parseInt(inputValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setInputValue('');
  };

  const confirmedOutput = confirmed ? (
    <View style={styles.startGameContainer}>
      <Text>Your selection:</Text>
      <Text style={styles.confirmedText}>{selectedNumber}</Text>
      <Button title="Start!" onPress={() => onStartGame(selectedNumber)} />
      <Text>🚀</Text>
    </View>
  ) : null;

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Start game🕹️</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Choose a number</Text>
        <Input
          blurOnSubmit
          autoCapitalize="none"
          keyboardType={'numeric'}
          placeholder="0"
          style={styles.input}
          maxLength={2}
          returnKeyType="done"
          handleOnChange={value => handleOnChange(value)}
          value={inputValue}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Reset" onPress={() => handleOnClear()} color={'black'} />
        <Button
          title="Confirm"
          onPress={() => handleConfirmInput()}
          color={'black'}
        />
      </View>
      {confirmedOutput}
    </View>
  );
};

export default Card;
