import Header from "@/components/Header";
import WrapperComponent from "@/components/WrapperComponent";
import { APP_NAME } from "@/config";
import "@rainbow-me/rainbowkit/styles.css";
import { Inter } from "next/font/google";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: APP_NAME,
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<WrapperComponent>
					<Header />
					<main>{children}</main>
				</WrapperComponent>
			</body>
		</html>
	);
}
