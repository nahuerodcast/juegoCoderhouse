import React from 'react';
import {View} from 'react-native';
import Header from './components/header';
import {styles} from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title={'Adivina el número'} />
    </View>
  );
};

export default App;
