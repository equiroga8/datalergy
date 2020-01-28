import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/StyleSheet';
import ActionButton from './ActionButton';
import { next } from '../redux/actions';

export default class ButtonBar extends React.Component {
	
	constructor(props) {
		super(props);
		this.buttonPress = this.buttonPress.bind(this);
	}

	buttonPress(buttonAction){
	    switch (buttonAction) {
	      case "Submit":
	        break;
	      case "Previous":
	      case "Next":
	         this.props.dispatch(next(buttonAction));
	         break;
	      default:
	        break;  
	    }
  }

	render() {
		let currNum = this.props.currentQuestion;
	    return (
	    	
			<View style={styles.buttonBar}>
				<ActionButton buttonName="Previous" isDisabled={currNum === 0} 
					buttonPress={this.buttonPress}
				/>
  				
				<ActionButton buttonName={(currNum === 4) ? "Submit" : "Next"}
					buttonPress={this.buttonPress} 
				/>
  		
			</View>
	    );
	}
}