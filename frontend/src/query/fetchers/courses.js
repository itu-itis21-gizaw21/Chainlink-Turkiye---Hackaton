import { BACKEND_ADDRESS } from "@/config";

export const getCourses = async () => {
	const resp = await fetch(`${BACKEND_ADDRESS}/courses`);
	const respBody = await resp.json();

	if (!respBody.ok) {
		throw new Error(respBody.message);
	}

	return respBody.data;
};
