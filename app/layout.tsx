"use client";

import { useState } from "react";
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import Home from "@/app/page";
import { Link } from "@heroui/link";
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
  const [numMapsShown, setNumMapsShown] = useState(0);
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
					<div className="relative flex flex-col min-h-screen">
						<Navbar filters={filters} setFilters={setFilters} />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              <Home filters={filters} setNumMapsShown={setNumMapsShown} />
						</main>
						<footer className="w-full flex items-center justify-center pb-6">
							<div
								className="flex items-center gap-1 text-current"
							>
								<span className="text-default-300">Currently showing {numMapsShown} maps</span>
							</div>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
