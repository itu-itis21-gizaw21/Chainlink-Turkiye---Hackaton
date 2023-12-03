export const CourseBender = {
	address: "0xEf761f38e812A0Fb99A5af2cbbA3c1AD16354Dc6",
	abi: [
		{
			inputs: [],
			stateMutability: "nonpayable",
			type: "constructor",
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
