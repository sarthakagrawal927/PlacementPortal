import MaterialDrawer, { DrawerProps } from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "./item";
import Box from "@mui/material/Box";

type ConfigType = {
	name: string;
	path: string;
};

interface SidebarProps extends DrawerProps {
	config: ConfigType[];
}

const Sidebar = ({ ...props }: SidebarProps) => {
	const drawerWidth = "15vw";
	return (
		<MaterialDrawer
			variant="permanent"
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
			}}
		>
			<Toolbar />
			<Box>
				<List>
					{props.config.map(({ name, path }: ConfigType) => (
						<ListItem key={name} path={path}>
							{name}
						</ListItem>
					))}
				</List>
			</Box>
		</MaterialDrawer>
	);
};

export default Sidebar;
