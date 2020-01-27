import React from 'react';
import { View, StatusBar, Image, Text, Picker } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { styles } from '../styles/StyleSheet';
import DateTimePicker from '@react-native-community/datetimepicker';

import * as Font from 'expo-font';

export default class QuestionsScreen extends React.Component {

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	onPress(){
		this.props.navigation.navigate('StartScreen');
	}
	render() {
		return (
			<View style={styles.questionsView}>
				 <Appbar dark={true} >
				 	<Appbar.BackAction onPress= {this.onPress}/>
				 	<Appbar.Content title="Datalergy"/>
			     </Appbar>
			      <View style={styles.questions}>
			      	<DateTimePicker value={new Date()}
                    mode="time"
                    is24Hour={false}
                    display="default"
                     />
			      </View>
				<View style={styles.buttonBar}>
					<Button mode="contained" dark={true} onPress= {this.onPress} color="#739CCF">
	    				Previous
	  				</Button>
					<Button mode="contained" dark={true} onPress= {this.onPress} color="#739CCF">
	    				Next
	  				</Button>

				</View>
			</View>
		);
	}
}