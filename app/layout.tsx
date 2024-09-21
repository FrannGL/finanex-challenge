import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { DiscordIcon, GithubIcon, PortfolioIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning lang="en">
			<head />
			<body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<ToastContainer
						position="bottom-right"
						limit={2}
						autoClose={2000}
						hideProgressBar
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						transition={Slide}
					/>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
						<footer className="w-full flex flex-col gap-3 items-center justify-center py-3">
							<div className="flex flex-row gap-2">
								<Link isExternal aria-label="Discord" href={siteConfig.links.website}>
									<PortfolioIcon className="text-default-500" />
								</Link>
								<Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
									<DiscordIcon className="text-default-500" />
								</Link>
								<Link isExternal aria-label="Github" href={siteConfig.links.github}>
									<GithubIcon className="text-default-500" />
								</Link>
							</div>
							<div>
								<Link
									isExternal
									className="flex items-center gap-1 text-current"
									href="https://github.com/FrannGL"
									title="Developer Profile"
								>
									<span className="text-default-600">Powered by</span>
									<p className="text-primary">Franco Galluccio</p>
								</Link>
							</div>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
