import Navbar from "./Navbar";

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}

/*<body className={`${mont.variable} ${open.variable}`>{children}</body>*/
