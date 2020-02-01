export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const SHOW_TIME_PICKER = 'SHOW_TIME_PICKER';
export const HIDE_TIME_PICKER = 'HIDE_TIME_PICKER';
export const FINISH = 'FINISH';

export function questionAnswer(index, answer) {
	return { type: QUESTION_ANSWER, payload: { index, answer }};
}

export function next(buttonAction) {
	return { type: CHANGE_QUESTION, buttonPressed: buttonAction };
}

export function submit(answer, userAnswer) {
	return { type: SUBMIT, payload: { answer, userAnswer}};
}

export function showTimePicker() {
	return {type: SHOW_TIME_PICKER};
}

export function hideTimePicker() {
	return {type: HIDE_TIME_PICKER};
}

export function finish() {
	return {type: FINISH};
}