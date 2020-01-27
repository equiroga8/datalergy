import React from 'react';
import { View, StatusBar, Image, Text } from 'react-native';
import { styles } from '../styles/StyleSheet';
import { Button } from 'react-native-paper';

export default class StartScreen extends React.Component {

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	onPress(){
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