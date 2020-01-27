export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';


const URL = 'https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=f80ca6727cd7421aa815';

export function questionAnswer(index, answer) {
	return { type: QUESTION_ANSWER, payload: { index, answer }};
}

export function next(buttonAction) {
	return { type: CHANGE_QUESTION, buttonPressed: buttonAction };
}

export function submit(answer, userAnswer) {
	return { type: SUBMIT, payload: { answer, userAnswer}};
}
