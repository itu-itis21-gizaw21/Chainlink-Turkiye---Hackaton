"use client";

import CourseGrid from "@/components/CourseGrid";
import { getCourses } from "@/query/fetchers/courses";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
	const coursesQuery = useQuery({ queryKey: ["courses"], queryFn: getCourses });

	return (
		<main className="mt-4">
			<div className="container">
				<h1>Courses</h1>
				{!coursesQuery.data ? (
					<div>Loading...</div>
				) : (
					<CourseGrid courses={coursesQuery.data || []} />
				)}
			</div>
		</main>
	);
}
