import { COURSES } from "../mockData.js";

export const getAll = async (req, res) => {
	return res.json({
		ok: true,
		data: COURSES,
	});
};

export const getById = async (req, res) => {
	const { id } = req.params;
	if (!id) {
		return res.status(400).json({
			ok: false,
			message: "Some parts of the URL are missing.",
		});
	}

	const course = COURSES.find((c) => c.id === id);
	if (!course) {
		return res.status(404).json({
			ok: false,
			message: "This course doesn't exist.",
		});
	}

	return res.json({
		ok: true,
		data: course,
	});
};
