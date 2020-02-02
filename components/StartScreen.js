import React from 'react';
import { View, StatusBar, Image, Text } from 'react-native';
import { styles } from '../styles/StyleSheet';
import { Button } from 'react-native-paper';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

export default class StartScreen extends React.Component {

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}
	/*
	async componentDidMount() {
		const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
	  	let finalStatus = existingStatus;
		if (existingStatus !== 'granted') {
		    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
		    finalStatus = status;
		}
		if (finalStatus !== 'granted') {
		   	console.log("Permission not granted");
		}
		console.log("Permision granted");

		let notificationId = Notifications.scheduleLocalNotificationAsync(
		    {
		      	title: "Submit your allergy symptoms!",
		      	body: 'Wow, I can show up even when app is closed',
		      	android: {
			      icon: require('../assets/eye.png'),
			      color: 'green',
			      priority: 'high',
			      sticky: false, 
			      vibrate: true
		    	}
		    },
		    {
		      repeat: 'minute',
		      time: new Date().getTime() + 10000,
		    }
		);
  		console.log(notificationId);

	}
	
	*/
	onPress(){
		//Notifications.cancelAllScheduledNotificationsAsync();
		this.props.navigation.navigate('QuestionsScreen');
	}


	render() {
		return (
			<View style = {styles.startScreen}>
				<StatusBar hidden />
				<View>
				<Image style = {styles.eyeImage} source = {require('../assets/eye.png')}/>
				<Image style = {styles.startImage} source = {require('../assets/datalergy.png')}/>
					<Button mode="contained" dark={true} onPress= {this.onPress} color="#739CCF">
    				Start
  				</Button>
				</View>
				
			</View>
		);
	}
}