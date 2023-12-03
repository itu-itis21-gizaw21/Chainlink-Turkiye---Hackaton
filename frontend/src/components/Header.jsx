"use client";

import { APP_NAME } from "@/config";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import Link from "next/link";

export default function Header() {
	return (
		<header className="header">
			<div className="header-content container">
				<div className="brand">
					<Link href="/" className="brand-text">
						{APP_NAME}
					</Link>
				</div>
				<nav className="nav">
					<Link href="/my-courses" className="nav-item">
						My Courses
					</Link>
					<Link href="#" className="nav-item">
						Profile
					</Link>
					<ConnectButton
					// accountStatus="avatar"
					// showBalance={false}
					/>
				</nav>
			</div>
		</header>
	);
}
