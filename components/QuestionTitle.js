import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/StyleSheet';

export default class QuestionTitle extends React.Component {
  render() {
    return (
		<View style = {styles.questionTitle}>

			<View style = {styles.questionOrder}>
				<Text style = {styles.numberText}>Question {this.props.currentQuestion + 1} out of 7:</Text>
       		</View>
       		<View style = {styles.questionContent}>
       			<Text style = {styles.questionText}>{this.props.question}</Text>
       		</View>
       	</View>
    );
  }
}