import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  confirmedText: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
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
  buttonsContainer: {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
