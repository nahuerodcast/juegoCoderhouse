import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '85%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOver: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  cardContainer: {},
  card: {
    width: '80%',
    paddingVertical: 20,
    margin: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 26,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  tries: {
    fontSize: 20,
  },
});
