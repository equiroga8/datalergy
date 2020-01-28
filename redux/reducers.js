import { combineReducers } from 'redux';

import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT } from './actions';


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
			return state.map((question, i) => {
				return { ...question,
						userAnswer: action.payload.index === i ?
									action.payload.answer : question.userAnswer
				}
			});
		default:
			return state;
	}
}

function loading(state = false, action = {}) {
	return state
}




const GlobalState = (combineReducers({
	finished,
	loading, 
	currentQuestion,
	questions

}));

export default GlobalState;