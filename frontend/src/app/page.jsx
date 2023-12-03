"use client";

import CourseGrid from "@/components/CourseGrid";
import { getCourses } from "@/query/fetchers/courses";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
	const coursesQuery = useQuery({ queryKey: ["courses"], queryFn: getCourses });

	return (
		<main className="mt-5">
			<div className="container">
				<h1 className="mb-3">Courses</h1>
				{!coursesQuery.data ? (
					<div>Loading...</div>
				) : (
					<CourseGrid courses={coursesQuery.data || []} />
				)}
			</div>
		</main>
	);
}
