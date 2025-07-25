import { ReactNode } from "react"
import { ThemeProvider } from "@/context/ThemeContext"
import DashboardShell from "./DashboardShell"

interface LayoutProps {
	children: ReactNode
}

export default function UserLayout({ children }: LayoutProps) {

	return (
        <div>
        <ThemeProvider>
          <DashboardShell>{children}</DashboardShell>
        </ThemeProvider>
    </div>
	)
}
