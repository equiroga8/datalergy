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

class QuestionsScreen extends React.Component {

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	onPress(){
		this.props.navigation.navigate('StartScreen');
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
			    	currentQuestion = {this.props.currentQuestion}
			    />
				<ButtonBar currentQuestion = {this.props.currentQuestion} dispatch={this.props.dispatch}/>
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
