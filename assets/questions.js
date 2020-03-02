 

var wakeTime = new Date();
wakeTime.setHours(7,0,0,0);

var bedTime = new Date();
bedTime.setHours(23,0,0,0);

export const questions =[
	{
		"id":0,
		"question":"How much did your eyes itch today?",
		"options": ["They were not itchy", "They were slightly itchy", "They were a little itchy", "They were itchy", "They were very itchy"],
		"answer": 1
	},
	{
		"id":1,
		"question":"How red were your eyes today?",
		"options": ["They were not red", "They were a slightly red","They were a little red", "They were red", "They were very red"],
		"answer": 1
	},

	{
		"id":2,
		"question":"How much rheum discharge did you wake up with?",
		"options": ["I had no rheum discharge", "I had a slight rheum discharge", "I had a little rheum discharge", "I had some rheum discharge", "I had severe rheum discharge"],
		"answer": 1
	},
	{
		"id":3,
		"question":"How many times did you sneeze?",
		"options": ["I did not sneeze", "I sneezed a couple of times", "I sneezed frequently", "I sneezed a lot", "I sneezed all day long"],
		"answer": 1
	},
	{
		"id":4,
		"question":"At what time did you go to bed?",
		"options": [],
		"answer": bedTime
	},
	{
		"id":5,
		"question":"At what time did you wake up?",
		"options": [],
		"answer": wakeTime
	},		
	{
		"id":6,
		"question":"What medication did you take today?",
		"options": ["None", "Tear drops", "Tear drops & Antihistamine", "Antihistamine", "Corticosteroid"],
		"answer": 1
	},
]