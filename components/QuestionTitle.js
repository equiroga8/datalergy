import React from 'react';
import { Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { styles } from '../styles/StyleSheet';

export default class QuestionTitle extends React.Component {
  render() {
    return (
		<View style = {styles.questionTitle}>
			<Text style = {styles.numberText}>Question {this.props.currentQuestion + 1} out of 5:</Text>
       		<Text style = {styles.questionText}>{this.props.question}</Text>
       	</View>
    );
  }
}