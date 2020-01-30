 

var defaultTime = new Date();
defaultTime.setHours(7,0,0,0)

export const questions =[
	{
		"id":0,
		"question":"How much did your eyes itch today?",
		"options": ["They did not itch", "They itched a little", "They itched", "They itched a lot"],
		"answer": 1},
	{
		"id":1,
		"question":"How red are your eyes today?",
		"options": ["They are not red", "They are a little red", "They are red", "They are very red"],
		"answer": 1},
	{
		"id":2,
		"question":"How many times did you sneeze?",
		"options": ["I did not sneeze", "I sneezed a couple of times", "I sneezed a lot", "I sneezed all day long"],
		"answer": 1},
	{
		"id":4,
		"question":"At what time did you wake up?",
		"options": [],
		"answer": defaultTime},
	{
		"id":5,
		"question":"What medication did you take today?",
		"options": ["None", "Tear drops", "Tear drops & Antihistamine", "Antihistamine", "Corticosteroid"],
		"answer": 1},
]