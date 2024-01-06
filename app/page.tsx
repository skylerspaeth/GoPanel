import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-2">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({size: "sm"})}>Welcome to&nbsp;</h1>
				<h1 className={title({ size: "sm", color: "violet" })}>GoPanel</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Start by selecting a map to host on the server.
				</h2>
			</div>
		</section>
	);
}
