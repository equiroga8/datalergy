import { combineReducers } from 'redux';
import { questions as qsData } from "../assets/questions";
import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, SHOW_TIME_PICKER, HIDE_TIME_PICKER, FINISH } from './actions';


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
			const nState = Object.assign({}, state);
			nState[0].answer = 1;
			nState[1].answer = 1;
			nState[2].answer = 1;
			nState[3].answer = 1;
			var bedTime = new Date();
			bedTime.setHours(23,0,0,0)
			var wakeTime = new Date();
			wakeTime.setHours(7,0,0,0)
			nState[4].answer = bedTime;
			nState[5].answer = wakeTime;
			nState[6].answer = 1;
			return nState;
		default:
			return state;
	}
}

function loading(state = false, action = {}) {
	switch (action.type) {
		case SUBMIT:	
			return true;
		case FINISH:
			return false; 
		default:
			return state;
	}
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

	loading, 
	currentQuestion,
	questions,
	showTimePicker

}));

export default GlobalState;