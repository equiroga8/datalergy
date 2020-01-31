import React from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from '../styles/StyleSheet';

export default class RadioButtonGroup extends React.Component {


  	render() {
		var counter = 1;
		var options = this.props.options.map((option, index) => {
						return (
							<View style={styles.optionView} key={"view" + index}>
			          			<RadioButton 
			          				value={counter++} 
			          				key={"rb" + index} 
			          				uncheckedColor="grey" 
			          				color="#739CCF"
			          				/>
			          			<Text style={styles.optionText} key={"text" + index}>{option}</Text>
			        		</View>
						);
				});

	    return (


			<View style={styles.radioButtonOptions}>
				
				<RadioButton.Group 
					value={this.props.answer}
					onValueChange={value => this.props.onChangeRadio(value)} 
				>
				
			        {options}
			       
			    </RadioButton.Group>
	       	</View>
	    );
	}
}