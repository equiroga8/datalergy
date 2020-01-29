import React from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from '../styles/StyleSheet';
import RadioButtonGroup from './RadioButtonGroup';
import TimePicker from './TimePicker';
import { showTimePicker, hideTimePicker, questionAnswer } from '../redux/actions';


export default class QuestionOptions extends React.Component {

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
		this.onConfirm = this.onConfirm.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onChangeRadio = this.onChangeRadio.bind(this);
	}

	onPress(){
		this.props.dispatch(showTimePicker());
	}

	onCancel() {
		this.props.dispatch(hideTimePicker());
	}

	onConfirm(time) {
		this.props.dispatch(questionAnswer(this.props.currentQuestion, time));
		this.props.dispatch(hideTimePicker());
	}

	onChangeRadio(value) {
		this.props.dispatch(questionAnswer(this.props.currentQuestion, value));
	}

  	render() {

	  	var isTimeSelect = 3 === this.props.currentQuestion;
	    return (

			<View style={styles.questionOptions}>
				
				{!isTimeSelect && <RadioButtonGroup  
									options={this.props.options}
									answer={this.props.answer}
									onChangeRadio={this.onChangeRadio}
									/>}

				{isTimeSelect && <TimePicker 
									onPress={this.onPress} 
									showTimePicker={this.props.showTimePicker}
									onCancel={this.onCancel}
									onConfirm={this.onConfirm}  
									answer={this.props.answer}
									/>}
				
	       	</View>
	    );
  	}
}