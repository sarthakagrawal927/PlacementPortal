import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import MaterialListItem, { ListItemProps } from "@mui/material/ListItem";

interface SidebarItemProps extends ListItemProps {
	path: string;
}

const SidebarItem = ({ path, children }: SidebarItemProps) => {
	const theme = useTheme();
	const { asPath } = useRouter();
	const isActive = asPath === path;
	return (
		<a href={path}>
			<MaterialListItem
				sx={{
					justifyContent: "center",
					margin: "1rem 0rem",
					padding: "1.5rem",
					fontSize: "1.25rem",
					fontWeight: "500",
					borderRadius: "0px 6px 6px 1px",
					borderRight: isActive ? `8px solid ${theme.uiColor.indigo}` : "none",
					backgroundColor: isActive ? theme.uiColor.lightestGray : "none",
					"&:hover": {
						cursor: "pointer",
						backgroundColor: theme.uiColor.lightestGray,
					},
				}}
			>
				{children}
			</MaterialListItem>
		</a>
	);
};

export default SidebarItem;
