import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import MaterialListItem, { ListItemProps } from "@mui/material/ListItem";
import Link from "next/Link";

const SidebarItem = ({ path, ...props }: SidebarItemProps) => {
	const theme = useTheme();
	const { asPath } = useRouter();
	const isActive = asPath === path;
	return (
		<Link href={path}>
			<MaterialListItem
				sx={{
					textTransform: "uppercase",
					margin: "1.6rem 0rem",
					padding: "1.5rem",
					fontSize: "1.25rem",
					borderRadius: "0px 6px 6px 1px",
					borderRight: isActive ? `10px solid ${theme.uiColor.indigo}` : "none",
					backgroundColor: isActive ? theme.uiColor.lightestGray : "none",
					"&:hover": {
						cursor: "pointer",
						backgroundColor: theme.uiColor.lightestGray,
					},
				}}
			>
				{props.children}
			</MaterialListItem>
		</Link>
	);
};

interface SidebarItemProps extends ListItemProps {
	children: string;
	path: string;
}

export default SidebarItem;
