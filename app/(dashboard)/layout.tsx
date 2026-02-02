import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "../layouts/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Product Management Dashboard",
	description: "A comprehensive dashboard for managing products effectively.",
	authors: [
		{
			name: "Adewunmi Quadri Ayodele",
			url: "https://www.productdashboardmanagement.vercel.app",
		},
	],
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
