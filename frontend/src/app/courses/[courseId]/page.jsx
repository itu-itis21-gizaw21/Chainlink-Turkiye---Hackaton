"use client";

import { CourseBender } from "@/contract";
import { getCourseById } from "@/query/fetchers/courses";
import { useQuery } from "@tanstack/react-query";
import { parseEther } from "viem";
import { useAccount, useContractRead, useContractWrite } from "wagmi";

export default function CourseDetailPage({ params }) {
	const courseQuery = useQuery({
		queryKey: ["course", params.courseId],
		queryFn: () => getCourseById(params.courseId),
	});
	const course = courseQuery.data;

	const { address: walletAddress } = useAccount();
	const isEnrolledInCourseRead = useContractRead({
		address: CourseBender.address,
		abi: CourseBender.abi,
		functionName: "isEnrolledInCourse",
		args: [course?.id],
		from: walletAddress,
	});
	const enrollWrite = useContractWrite({
		address: CourseBender.address,
		abi: CourseBender.abi,
		functionName: "enroll",
		args: [course?.id],
		from: walletAddress,
		value: parseEther(course?.priceEther || "0"),
	});

	const onEnrollButtonClick = async () => {
		await enrollWrite.writeAsync();
		isEnrolledInCourseRead.refetch();
	};

	return (
		<main className="mt-4">
			<div className="container">
				{!course ? (
					<div>Loading...</div>
				) : (
					<div className="row">
						<div className="col-12 col-lg-4">
							<img src={course.imageUrl} alt="Course image" className="w-100" />
						</div>
						<div className="col-12 col-lg-8">
							<h1>{course.title}</h1>
							<h5>{course.instructorName}</h5>
							<p>{course.description}</p>

							{isEnrolledInCourseRead.isLoading ? (
								<button className="btn btn-primary" disabled>
									Loading...
								</button>
							) : isEnrolledInCourseRead.data ? (
								<button className="btn btn-primary" disabled>
									Enrolled ✅
								</button>
							) : (
								<button
									className="btn btn-primary"
									onClick={onEnrollButtonClick}
								>
									{enrollWrite.isLoading
										? "Processing..."
										: `Enroll for ${course.priceEther} ETH`}
								</button>
							)}
						</div>
					</div>
				)}
			</div>
		</main>
	);
}
