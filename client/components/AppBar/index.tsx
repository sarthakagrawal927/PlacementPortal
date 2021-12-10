import { useTheme } from "@mui/material";
import MaterialAppBar, { AppBarProps } from "@mui/material/AppBar";

const AppBar = ({ ...props }: AppBarProps) => {
	const theme = useTheme();
	return (
		<MaterialAppBar
			sx={{
				zIndex: theme => theme.zIndex.drawer + 2,
				borderBottom: `1px solid ${theme.uiColor.lightGray}`,
				color: theme.uiColor.darkestGray,
				backgroundColor: "white",
				boxShadow: "0",
				textAlign: "center",
				padding: "1rem",
				fontWeight: 600,
				textTransform: "uppercase",
				fontSize: "1.5rem",
			}}
		>
			{props.children}
		</MaterialAppBar>
	);
};

export default AppBar;
