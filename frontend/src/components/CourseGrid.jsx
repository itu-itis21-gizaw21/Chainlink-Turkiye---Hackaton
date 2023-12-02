import CourseGridItem from "./CourseGridItem";

export default function CourseGrid({ courses }) {
	return (
		<div className="course-grid">
			{courses.map((course) => (
				<CourseGridItem course={course} />
			))}
		</div>
	);
}
