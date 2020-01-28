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
				    // dark-content, light-content and default
				    hidden = {false}
				    //To hide statusBar
				    backgroundColor = "#739CCF"
				    //Background color of statusBar only works for Android
				    translucent = {true}
				    //allowing light, but not detailed shapes
				    networkActivityIndicatorVisible = {true}
				/>
			</View>
	    );
	}
}