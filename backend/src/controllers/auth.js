import { mockData } from "../mockData.js";

export const getMe = async (req, res) => {
	const user = mockData.users.find(
		(u) => u.walletAddress === req.walletAddress
	);
	if (!user) {
		return res.status(401).json({
			ok: false,
			message: "There is no user registered with this wallet address.",
		});
	}

	return res.json({
		ok: true,
		data: user,
	});
};
