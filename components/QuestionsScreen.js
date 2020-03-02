import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../styles/StyleSheet';
import QuestionTitle from './QuestionTitle';
import AppBar from './AppBar';
import ButtonBar from './ButtonBar';
import Statusbar from './Statusbar';
import QuestionOptions from './QuestionOptions';
import { finish, submit } from '../redux/actions';

class QuestionsScreen extends React.Component {

	constructor(props) {
		super(props);
		this.appendData = this.appendData.bind(this);
	}


	async appendData() {

		this.props.dispatch(submit());

		const data = {
			"itchiness": this.props.questions[0].answer,
			"redness": this.props.questions[1].answer,
			"rheum": this.props.questions[2].answer,
			"sneezes": this.props.questions[3].answer,
			"wakeUpTime": this.props.questions[4].answer.toLocaleTimeString(),
			"bedTime": this.props.questions[5].answer.toLocaleTimeString(),
			"medication": this.props.questions[6].options[this.props.questions[6].answer - 1]
		};

		const response = await fetch('https://us-central1-datalergy.cloudfunctions.net/submitData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        });
		this.props.dispatch(finish());
       	this.props.navigation.navigate('StartScreen');
	}

	render() {
		return (
			<View style={styles.questionsView}>
				<Statusbar />
				<AppBar 
					navigation={this.props.navigation}
					currentQuestion={this.props.currentQuestion}
					loading={this.props.loading}
					dispatch={this.props.dispatch}
				/>
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
				<ButtonBar 
					currentQuestion = {this.props.currentQuestion} 
					dispatch={this.props.dispatch}
					appendData={this.appendData}
					loading={this.props.loading}
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
