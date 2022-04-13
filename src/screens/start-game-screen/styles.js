import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
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
  cardTitle: {
    fontSize: 30,
    color: 'black',
  },
  inputContainer: {
    color: 'black',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 30,
  },
  label: {color: 'black'},
  buttonsContainer: {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
