import { ReactNode, Suspense } from "react"
// import { ToastContainer } from "react-toastify"
import { Metadata } from "next"
import { Manrope } from "next/font/google"
import Fallback from "@/components/fallbackLoader/index"

import "./globals.css"
import "@radix-ui/themes/styles.css"

interface LayoutProps {
	children: ReactNode
}

export const metadata: Metadata = {
	title: "PinnaclePay",
	description: "All your assigned beneficiaries in one place."
}

const manrope = Manrope({ subsets: ["latin"] })



export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={manrope.className}>
				<Suspense fallback={<Fallback />}>
					{children}
					{/* 
					<ToastContainer 
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
					/>
					*/}
				</Suspense>
			</body>
		</html>
	)
}