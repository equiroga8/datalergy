import { combineReducers } from 'redux';
import { questions as qsData } from "../assets/questions";
import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, SHOW_TIME_PICKER, HIDE_TIME_PICKER, FINISH } from './actions';


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
		case FINISH:
			return 0;	
		default:
			return state;
	}
}

function questions(state = [], action = {}) {
	switch(action.type) {
		case QUESTION_ANSWER:
			const newState = Object.assign({}, state);
			newState[action.payload.index].answer = action.payload.answer;
			return newState;
			case FINISH:
			return [...qsData];
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
			console.log("SHOW_TIME_PICKER");
			return true;
		case HIDE_TIME_PICKER:
			console.log("HIDE_TIME_PICKER");
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