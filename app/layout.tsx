"use client";

import { useState } from "react";
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import Home from "@/app/page";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

// export const metadata: Metadata = {
// 	title: {
// 		default: siteConfig.name,
// 		template: `%s - ${siteConfig.name}`,
// 	},
// 	description: siteConfig.description,
// 	themeColor: [
// 		{ media: "(prefers-color-scheme: light)", color: "white" },
// 		{ media: "(prefers-color-scheme: dark)", color: "black" },
// 	],
// 	icons: {
// 		icon: "/favicon.ico",
// 		shortcut: "/favicon-16x16.png",
// 		apple: "/apple-touch-icon.png",
// 	},
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
  const [filters, setFilters] = useState({ name: "", source: "official" });
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar filters={filters} setFilters={setFilters} />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              <Home filters={filters} />
						</main>
						{/*<footer className="w-full flex items-center justify-center py-3">
							<div
								className="flex items-center gap-1 text-current"
							>
								<span className="text-default-600">Built by Skyler Spaeth</span>
							</div>
						</footer>*/}
					</div>
				</Providers>
			</body>
		</html>
	);
}
