import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex flex-wrap justify-end">
			<Link href="/">Home</Link>
			<Link href="/">About</Link>
			<Link href="/">Contact</Link>
			<Link href="/">Fuck Off</Link>
		</nav>
	);
}
