import React from 'react';
import { View } from 'react-native';
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

		this.props.dispatch(hideTimePicker());
		this.props.dispatch(questionAnswer(this.props.currentQuestion, time));
	
	}

	onChangeRadio(value) {
		this.props.dispatch(questionAnswer(this.props.currentQuestion, value));
	}

  	render() {

	  	var isWakeTimeSelect = 5 === this.props.currentQuestion;
	  	var isBedTimeSelect = 4 === this.props.currentQuestion;

	    return (
			
			<View style={styles.questionOptions}>
				
				{!isBedTimeSelect && !isWakeTimeSelect && <RadioButtonGroup  
									options={this.props.options}
									answer={this.props.answer}
									onChangeRadio={this.onChangeRadio}
									/>}

				{isBedTimeSelect && 
						<View style={styles.timePickerView}>							
							<TimePicker
								isWake={false}
								onPress={this.onPress} 
								showTimePicker={this.props.showTimePicker}
								onCancel={this.onCancel}
								onConfirm={this.onConfirm}  
								answer={this.props.answer}
							/>
						</View>
				}


				{isWakeTimeSelect && 
						<View style={styles.timePickerView}>							
							<TimePicker 	
								isWake={true}
								onPress={this.onPress} 
								showTimePicker={this.props.showTimePicker}
								onCancel={this.onCancel}
								onConfirm={this.onConfirm}  
								answer={this.props.answer}
							/>
						</View>
				}


				
	       	</View>
	    );
  	}
}