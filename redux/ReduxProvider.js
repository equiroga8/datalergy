import React from 'react';

import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { questions } from "../assets/questions";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import QuestionsScreen from '../components/QuestionsScreen';
import StartScreen from '../components/StartScreen';


const AppNavigator = createStackNavigator({
	QuestionsScreen: { 
		screen: QuestionsScreen 
	},
	StartScreen: {
		screen: StartScreen
	}
},{
	initialRouteName: 'StartScreen',
	headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);

export default class ReduxProvider extends React.Component {

	constructor(props) {
		super(props);

		this.initialState = {

			loading: false,
			currentQuestion: 0,
			questions: [...questions],
			showTimePicker: false

		};
		
		this.store = this.configureStore();
	}



	render() {

		return (
			<Provider store={ this.store }>
				<PaperProvider theme={theme}>
					<AppContainer />
				</PaperProvider>
			</Provider>		
		);
	}

	configureStore() {
		return createStore(GlobalState, this.initialState);

	}
}

	const theme = {
	  ...DefaultTheme,
	  roundness: 5,
	  colors: {
	    ...DefaultTheme.colors,
	    primary: '#739CCF',
	    accent: '#f1c40f',
	  },
};