// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract CourseBender {
	mapping(string => uint) coursePrices;
	mapping(address => string[]) ownedCourseIds;
	// mapping(address => string[]) completedCourseIds;

	constructor() {
		coursePrices["1164fd4e-b089-49c8-a8dc-763b21f2338b"] = 0.03 ether;
		coursePrices["6307c84f-25db-42e7-9cfa-fefdebaf3e00"] = 0.05 ether;
	}

	function isEnrolledInCourse(string memory courseId) public view returns (bool) {
		for (uint i = 0; i < ownedCourseIds[msg.sender].length; i++) {
			if (keccak256(abi.encodePacked(ownedCourseIds[msg.sender][i])) == keccak256(abi.encodePacked(courseId))) {
				return true;
			}
		}
		return false;
	}

	function getMyCourseIds() public view returns (string[] memory) {
		return ownedCourseIds[msg.sender];
	}
	
	function enroll(string memory courseId) public payable {
		require(msg.value == coursePrices[courseId], "Payment amount is wrong.");
		require(!isEnrolledInCourse(courseId), "Already enrolled.");
		ownedCourseIds[msg.sender].push(courseId);
	}

	function debug_clearMyEnrollments() public {
		delete ownedCourseIds[msg.sender];
	}

	function debug_sendAllMoneyToMe() public {
		payable(msg.sender).transfer(address(this).balance);
	}
}
