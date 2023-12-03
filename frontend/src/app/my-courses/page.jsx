"use client";

import CourseGrid from "@/components/CourseGrid";
import { CourseBender } from "@/contract";
import { getCourses } from "@/query/fetchers/courses";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useAccount, useContractRead } from "wagmi";

export default function MyCoursesPage() {
	const coursesQuery = useQuery({ queryKey: ["courses"], queryFn: getCourses });

	const { address: walletAddress } = useAccount();
	const getMyCourseIdsRead = useContractRead({
		address: CourseBender.address,
		abi: CourseBender.abi,
		functionName: "getMyCourseIds",
		from: walletAddress,
	});

	const myCourses = useMemo(
		() =>
			coursesQuery.data && getMyCourseIdsRead.data
				? coursesQuery.data.filter((course) =>
						getMyCourseIdsRead.data.includes(course.id)
				  )
				: undefined,
		[coursesQuery.data, getMyCourseIdsRead.data]
	);

	return (
		<main className="mt-5">
			<div className="container">
				<h1 className="mb-3">My Courses</h1>
				{!myCourses ? (
					<div>Loading...</div>
				) : (
					<CourseGrid courses={myCourses} />
				)}
			</div>
		</main>
	);
}
