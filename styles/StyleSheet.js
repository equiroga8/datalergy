import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';


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
  questionsView: {
    flex:1,
    paddingTop: StatusBar.currentHeight || 0
  },
  progressView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 5
  },
  questionTitle: {
    flex:2,
    flexDirection: 'column',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    //backgroundColor: 'lightgreen',
    justifyContent: 'space-around'
  },

  questionOrder: {
    flex:1,
    flexDirection: 'column',
  },
  questionContent: {
    flex:2,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  questionText: {
    fontSize: 20,
    fontWeight: '100'
  },
  numberText: {
    color: 'grey'
  },
  radioButtonOptions: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //backgroundColor: 'aquamarine',
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 10,
    paddingRight: 15,
  },
  questionOptions: {
    flex: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'lavenderblush',
    
  },

  optionView: {
    flex:1,
    flexDirection: 'row',
    paddingLeft: 10,
    //borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  optionText: {
    color: 'grey',
    fontSize: 19,
  },

  timePickerView: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    //backgroundColor: 'brown',
  },

  wakeTP: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

   bedTP: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },

  sunriseIcon: {
    width: 39,
    height: 39,
    marginRight: 10,
  },

  sleepIcon: {
    width: 35,
    height: 35,
    marginRight: 10
  },

  timeText: {
     color: 'grey',
    fontSize: 50,
  },

  buttonBar: {
    flex:4, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 10,
    //backgroundColor: 'lightcoral'

  },
  actionButton: {
    width: 120
  }, 
});