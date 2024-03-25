const sampleExerciseData = {
	userDetails: {
		fitnessLevel: 'Intermediate',
		goals: 'Lose weight',
		preferences: 'Prefers yoga and light jogging',
		equipmentAvailability: 'Have access to a gym and plays soccer',
		availableTime: '60 minutes per day',
		healthConditions: 'None',
	},
	workoutPlan: [
		{
			day: 'Monday',
			workouts: [
				{
					name: 'Yoga Flow',
					description:
						'A series of dynamic yoga postures linked together with your breath. Focus on sun salutations and standing poses to increase flexibility and strength.',
					duration: 30,
					intensity: 'Moderate',
				},
				{
					name: 'Treadmill Jogging',
					description:
						"A steady jog on the treadmill. Maintain a pace that allows you to converse comfortably to ensure you're in the right heart rate zone for fat burning.",
					duration: 30,
					intensity: 'Moderate',
				},
			],
		},
		{
			day: 'Tuesday',
			workouts: [
				{
					name: 'Soccer Practice',
					description:
						'Join a team practice or work on soccer drills that focus on agility, speed, and coordination. This can include dribbling, shooting, and small-sided games.',
					duration: 60,
					intensity: 'High',
				},
			],
		},
		{
			day: 'Wednesday',
			workouts: [
				{
					name: 'Power Yoga',
					description:
						'An energetic form of yoga where you fluidly move from one pose to the next while connecting your breathing to your movements. Includes more challenging poses to improve strength and flexibility.',
					duration: 60,
					intensity: 'High',
				},
			],
		},
		{
			day: 'Thursday',
			workouts: [
				{
					name: 'Strength Training - Upper Body',
					description:
						'Use gym equipment for a circuit of exercises targeting the chest, back, shoulders, and arms. Include exercises like bench press, lat pulldowns, shoulder press, and bicep curls. Aim for 3 sets of 10-12 reps each.',
					duration: 60,
					intensity: 'High',
				},
			],
		},
		{
			day: 'Friday',
			workouts: [
				{
					name: 'Steady State Jogging',
					description:
						'A longer, steady jog either outdoors or on a treadmill. Focus on maintaining a consistent pace that still allows for comfortable conversation. This helps in improving cardiovascular endurance.',
					duration: 60,
					intensity: 'Moderate',
				},
			],
		},
		{
			day: 'Saturday',
			workouts: [
				{
					name: 'Restorative Yoga',
					description:
						'A gentler form of yoga that aims to bring physical and mental relaxation through poses that are held for a longer duration. Use props like yoga blocks and straps to assist in holding poses without strain.',
					duration: 60,
					intensity: 'Low',
				},
			],
		},
		{
			day: 'Sunday',
			workouts: [
				{
					name: 'Soccer Match',
					description:
						'Participate in a full soccer match or simulate game conditions with friends or teammates. This is not only a great cardiovascular workout but also helps in practicing your soccer skills under simulated match conditions.',
					duration: 60,
					intensity: 'High',
				},
			],
		},
	],
};

export default sampleExerciseData;
