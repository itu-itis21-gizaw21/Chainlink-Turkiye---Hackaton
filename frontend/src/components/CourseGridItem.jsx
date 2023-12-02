import Link from "next/link";

export default function CourseGridItem({ course }) {
	return (
		<Link href="#" className="course-grid-item text-decoration-none">
			<div className="card">
				<img
					src={course.imageUrl}
					alt="Course image"
					className="course-grid-item-image card-img-top"
				/>
				<div class="card-body">
					<h5 class="card-title mb-1">{course.title}</h5>
					<div>{course.instructorName}</div>
					<span className="badge bg-primary mt-2">{course.priceEther} ETH</span>
				</div>
			</div>
		</Link>
	);
}
