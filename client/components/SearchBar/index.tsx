import { useState } from "react";
import { styled, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";

import SearchIcon from "@mui/icons-material/Search";

const options = ["Company", "Profile", "Location"];

const StyledSelect = styled(Select)({
	height: 40,
	width: "8vw",
	marginRight: "auto !important",
	borderRadius: "0.2rem 0rem 0rem 0.2rem",
	border: 0,
});

export default function CustomizedInputBase() {
	const theme = useTheme();
	const [inputValue, setInputValue] = useState("");
	const [selectValue, setSelectValue] = useState<string>(options[0]);

	return (
		<Paper
			component="form"
			sx={{
				display: "flex",
				alignItems: "center",
				width: "50vw",
				height: 40,
				border: `1px solid ${theme.uiColor.gray}`,
				boxShadow: "none",
				fontSize: "0.75rem",
			}}
		>
			<IconButton aria-label="select" sx={{ p: 0 }}>
				<StyledSelect displayEmpty value={selectValue} onChange={event => setSelectValue(event.target.value as string)}>
					{options.map(option => {
						return (
							<MenuItem value={option} key={option}>
								{option}
							</MenuItem>
						);
					})}
				</StyledSelect>
			</IconButton>
			<InputBase
				sx={{ ml: 1, flex: 1, borderRadius: 0 }}
				placeholder=""
				value={inputValue}
				onChange={e => {
					setInputValue(e.target.value);
				}}
			/>
			<IconButton type="submit" sx={{ p: "18px", height: "5px", width: "5px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}
