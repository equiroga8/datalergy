import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { styles } from '../styles/StyleSheet';
import { Bar } from 'react-native-progress';
import { finish } from '../redux/actions';

export default class AppBar extends React.Component {
	
	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	onPress(){
		this.props.dispatch(finish());
		this.props.navigation.navigate('StartScreen');
	}

	render() {
	    return (
			<View style = {styles.appBar}>
	       		<Appbar dark={true} >
	       			<Appbar.Action icon="close" onPress= {this.onPress} />
				 	<Appbar.Content title="Datalergy"/>
				</Appbar>
				<Bar 
					progress={(this.props.currentQuestion + 1)/5}
					width={null}
					indeterminate={this.props.loading}
					borderWidth={0}
					borderRadius={0}
					color="red"
					unfilledColor="#ffcccb"
					height={4}
				/>
	       	</View>
	    );
	}
}