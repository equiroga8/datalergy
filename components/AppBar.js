import React from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { styles } from '../styles/StyleSheet';

export default class AppBar extends React.Component {
	
	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	onPress(){
		this.props.navigation.navigate('StartScreen');
	}

	render() {
	    return (
			<View style = {styles.appBar}>
	       		<Appbar dark={true} >
				 	<Appbar.BackAction onPress= {this.onPress}/>
				 	<Appbar.Content title="Datalergy"/>
				</Appbar>
	       	</View>
	    );
	}
}