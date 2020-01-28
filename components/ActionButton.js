import React from 'react';
import { View } from 'react-native';
import { Button} from 'react-native-paper';
import { styles } from '../styles/StyleSheet';

export default class ButtonBar extends React.Component {
	
	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	onPress(){
		this.props.buttonPress(this.props.buttonName);
	}

	render() {
	    return (
			<View style={styles.actionButton}>
				<Button mode="contained" 
					dark={true} 
					onPress= {this.onPress} 
					color="#739CCF" 
					disabled={this.props.isDisabled}>
    				{this.props.buttonName}
  				</Button>
			</View>
	    );
	}
}