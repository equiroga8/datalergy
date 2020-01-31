import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, ProgressBar } from 'react-native-paper';
import { styles } from '../styles/StyleSheet';
import QuestionTitle from './QuestionTitle';
import AppBar from './AppBar';
import ButtonBar from './ButtonBar';
import Statusbar from './Statusbar';
import QuestionOptions from './QuestionOptions';

import GoogleSheet, { append } from './GoogleSheetAPI.js';

class QuestionsScreen extends React.Component {

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
		this.appendData = this.appendData.bind(this);

	}

	onPress(){
		this.props.navigation.navigate('StartScreen');
	}


	appendData() {

		const data = {
		        "values": [ "a", "b", "c", "d", "e", "f"
		    ]
		}

		append(data,"symptoms!A1%3AF1").then(item => {
			console.log("inside then");
      		console.log(JSON.stringify(item));
    	}).catch(e => console.log(e))
	}

	render() {
		return (
			<View style={styles.questionsView}>
				<Statusbar />
				<AppBar navigation={this.props.navigation}/>
				<View><ProgressBar progress={(this.props.currentQuestion + 1)/5} color="red"/></View>
			    
			    <QuestionTitle 
			    	question={this.props.questions[this.props.currentQuestion].question} 
			    	currentQuestion = {	this.props.currentQuestion}
			    />
			    <QuestionOptions 
			    	options={this.props.questions[this.props.currentQuestion].options}
			    	answer={this.props.questions[this.props.currentQuestion].answer}
			    	currentQuestion = {this.props.currentQuestion}
			    	dispatch={this.props.dispatch}
			    	showTimePicker={this.props.showTimePicker}
			    />
				<ButtonBar currentQuestion = {this.props.currentQuestion} dispatch={this.props.dispatch}/>
				<Button mode="contained" 
					dark={true} 
					onPress= {this.appendData} 
					color="#739CCF" 
					disabled={this.props.isDisabled}
				>
    				sheets
  				</Button>
  				<GoogleSheet
			        credentialsDetails={{
			          redirectUrl: 'http://localhost',
			          clientId,
			        }}
			        spreadsheetId= {spreadSheetId}
			     />
			</View>
		);
	}
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(QuestionsScreen);
