"use client";

import { getCourseById } from "@/query/fetchers/courses";
import { useQuery } from "@tanstack/react-query";

export default function CourseDetailPage({ params }) {
	const courseQuery = useQuery({
		queryKey: ["course"],
		queryFn: () => getCourseById(params.courseId),
	});

	return (
		<main className="mt-4">
			<div className="container">
				{!courseQuery.data ? (
					<div>Loading...</div>
				) : (
					<div className="row">
						<div className="col-12 col-lg-4">
							<img
								src={courseQuery.data.imageUrl}
								alt="Course image"
								className="w-100"
							/>
						</div>
						<div className="col-12 col-lg-8">
							<h1>{courseQuery.data.title}</h1>
							<h5>{courseQuery.data.instructorName}</h5>
							<p>{courseQuery.data.description}</p>
							<button className="btn btn-primary">
								Enroll for {courseQuery.data.priceEther} ETH
							</button>
						</div>
					</div>
				)}
			</div>
		</main>
	);
}
