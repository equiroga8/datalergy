import React from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from '../styles/StyleSheet';
import RadioButtonGroup from './RadioButtonGroup';


export default class QuestionOptions extends React.Component {
  render() {

  	var isTimeSelect = 3 === this.props.currentQuestion;
    return (

		
		<View style={styles.questionOptions}>
			
			{!isTimeSelect && <RadioButtonGroup  options={this.props.options}/>}

			{isTimeSelect && <Text>Select time</Text>}
			
       	</View>
    );
  }
}