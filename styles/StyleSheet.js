import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  buttonBar: {
    flex:1, 
    flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'flex-start',

  }, 
  questionsView: {
    flex:1
  },
  questions: {
    flex:5
  }
});