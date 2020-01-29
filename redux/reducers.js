import { combineReducers } from 'redux';

import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, SHOW_TIME_PICKER, HIDE_TIME_PICKER } from './actions';


function finished(state = false, action = {}) {
	
			return state;
}

function currentQuestion(state = 0, action = {}) {
	switch(action.type) {
		case CHANGE_QUESTION:
			var newState;
			if (action.buttonPressed === "Next"){
				newState = state + 1;
			} else {
				newState = state - 1;
			}
			return newState;
		default:
			return state;
	}
}

function questions(state = [], action = {}) {
	switch(action.type) {
		case QUESTION_ANSWER:
			state[action.payload.index].answer = action.payload.answer;
			return state;
		default:
			return state;
	}
}

function loading(state = false, action = {}) {
	return state;
}

function showTimePicker(state = false, action = {}) {
	switch (action.type) {
		case SHOW_TIME_PICKER:
			return true;
		case HIDE_TIME_PICKER:
			return false; 
		default:
			return state;
	}
}




const GlobalState = (combineReducers({
	finished,
	loading, 
	currentQuestion,
	questions,
	showTimePicker

}));

export default GlobalState;