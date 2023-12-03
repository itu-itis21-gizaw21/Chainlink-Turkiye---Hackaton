"use client";

import WalletManager from "@/components/WalletManager";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { hardhat, sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
	[sepolia, hardhat],
	[publicProvider()]
);

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

const queryClient = new QueryClient();

export default function WrapperComponent({ children }) {
	return (
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider chains={chains}>
				<QueryClientProvider client={queryClient}>
					<WalletManager />
					{children}
				</QueryClientProvider>
			</RainbowKitProvider>
		</WagmiConfig>
	);
}
