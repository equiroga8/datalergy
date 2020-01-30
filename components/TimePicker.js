import React from 'react';
import { Text, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FAB } from 'react-native-paper';
import { styles } from '../styles/StyleSheet';

export default class TimePicker extends React.Component {

	constructor(props) {
		super(props);
		this.formatAMPM = this.formatAMPM.bind(this);
	}


	formatAMPM(date) {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime;
	}

  	render() {

	    return (
			<View style={styles.timePickerView}>
			
				<DateTimePickerModal 
	                date={this.props.answer}
	                onCancel={this.props.onCancel}
	                onConfirm={this.props.onConfirm}
	                isVisible={this.props.showTimePicker}
	                mode="time"
	                is24Hour={false}
	                display="default"
           		/>

				<Text style={styles.timeText} onPress={this.props.onPress}> 
					{this.formatAMPM(this.props.answer)} 
				</Text>

	       	</View>
	    );
  	}     		
}