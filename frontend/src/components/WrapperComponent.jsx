"use client";

import WalletManager from "@/components/WalletManager";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains([sepolia], [publicProvider()]);

const { connectors } = getDefaultWallets({
	appName: "Chainlink Hackathon Project",
	projectId: "YOUR_PROJECT_ID",
	chains,
});

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
});

export default function WrapperComponent({ children }) {
	return (
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider chains={chains}>
				<WalletManager />
				{children}
			</RainbowKitProvider>
		</WagmiConfig>
	);
}
