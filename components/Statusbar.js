import React from 'react';
import { View, StatusBar } from 'react-native';
import { styles } from '../styles/StyleSheet';
import ActionButton from './ActionButton';

export default class Statusbar extends React.Component {
	
	render() {
	    return (
			<View style={styles.statusBar}>
  				<StatusBar
				    barStyle = "light-content"
				    hidden = {false}
				    backgroundColor = "#739CCF"
				    translucent = {true}
				    networkActivityIndicatorVisible = {true}
				/>
			</View>
	    );
	}
}