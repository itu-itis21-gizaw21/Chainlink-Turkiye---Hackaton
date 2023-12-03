require("@nomicfoundation/hardhat-toolbox");
const secrets = require("./secrets");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.19",
	networks: {
		hardhat: {
			accounts: {
				mnemonic: secrets.mnemonic,
			},
			chainId: 31337,
		},
	},
};
