import MaterialAppBar, { AppBarProps } from "@mui/material/AppBar";

const AppBar = ({ ...props }: AppBarProps) => {
	return (
		<MaterialAppBar
			sx={{
				zIndex: theme => theme.zIndex.drawer + 1,
				...props.sx,
			}}
		>
			{props.children}
		</MaterialAppBar>
	);
};

export default AppBar;
