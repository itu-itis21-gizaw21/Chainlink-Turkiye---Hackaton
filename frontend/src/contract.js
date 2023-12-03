export const CourseBender = {
	address: "0x4E472Ed61dc0434614Ab8779064C68138C7459A4",
	abi: [
		{
			inputs: [],
			stateMutability: "nonpayable",
			type: "constructor",
		},
		{
			inputs: [],
			name: "debug_clearMyEnrollments",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [],
			name: "debug_sendAllMoneyToMe",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "string",
					name: "courseId",
					type: "string",
				},
			],
			name: "enroll",
			outputs: [],
			stateMutability: "payable",
			type: "function",
		},
		{
			inputs: [],
			name: "getMyCourseIds",
			outputs: [
				{
					internalType: "string[]",
					name: "",
					type: "string[]",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "string",
					name: "courseId",
					type: "string",
				},
			],
			name: "isEnrolledInCourse",
			outputs: [
				{
					internalType: "bool",
					name: "",
					type: "bool",
				},
			],
			stateMutability: "view",
			type: "function",
		},
	],
};
