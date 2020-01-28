import React from 'react';
import { Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../styles/StyleSheet';

export default class TimePicker extends React.Component {
  render() {
    return (
		<View>
       		<DateTimePicker value={new Date()}
                    mode="time"
                    is24Hour={false}
                    display="default"
            />
       	</View>
    );
  }
}