import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {styles} from './styles';

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Start game🕹️</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Choose a number</Text>
        <TextInput placeholder="0" style={styles.input} maxLength={2} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Reset" onPress={() => null} color={'black'} />
        <Button title="Confirm" onPress={() => null} color={'black'} />
      </View>
    </View>
  );
};

export default Card;
