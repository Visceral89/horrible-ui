import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { Open_Sans } from "@next/font/google";
import { Montserrat } from "@next/font/google";

const mont = Montserrat({
	variable: "--font-mont",
	display: "swap",
	subsets: ["latin"],
});
const open = Open_Sans({
	variable: "--font-open",
	display: "swap",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<main className={`${mont.variable} ${open.variable} font-sans`}>
				<Component {...pageProps} />
			</main>
		</Layout>
	);
}
