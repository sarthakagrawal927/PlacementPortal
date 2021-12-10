import Head from "next/head";
import AppBar from "./../components/AppBar";
import Sidebar from "./../components/Sidebar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { adminConfig } from "./sidebarConfig";

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<Head>
				<title>MIT Placement Portal</title>
				<meta name="description" content="Placement portal of Manipal Institute of Technology." />
				<link rel="icon" type="image/ico" href="/images/favicon.ico" />
			</Head>
			<Box sx={{ display: "flex" }}>
				<AppBar>MIT Placement Portal</AppBar>
				<Sidebar config={adminConfig} />
				<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
					<Toolbar />
					{children}
				</Box>
			</Box>
		</>
	);
};

interface MainLayoutProps {
	children: React.ReactNode;
}

export default MainLayout;
