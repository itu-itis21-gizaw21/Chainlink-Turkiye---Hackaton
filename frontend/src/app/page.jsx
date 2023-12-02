import CourseGrid from "@/components/CourseGrid";
import { COURSES } from "@/mockData";

export default function Home() {
	return (
		<main className="mt-4">
			<div className="container">
				<h1>Courses</h1>
				<CourseGrid courses={COURSES} />
			</div>
		</main>
	);
}
