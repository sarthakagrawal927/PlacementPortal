import React from "react";
import Stack from "@mui/material/Stack";
import { Button as SimpleButton } from "@mui/material";

import Button from "./../../components/Button";
import SearchBar from "./../../components/SearchBar";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { useTheme, styled } from "@mui/material";

const Menubar = () => {
	const theme = useTheme();
	const StyledButton = styled(SimpleButton)({ color: theme.uiColor.darkGray });

	return (
		<Stack direction="row" justifyContent="space-between" sx={{ marginTop: "1%" }}>
			<Button endIcon={<AddIcon />} text="New Job" variant="outlined" rounded />
			<SearchBar />
			<StyledButton endIcon={<FilterAltIcon />}>Filter</StyledButton>
			<StyledButton endIcon={<SortByAlphaIcon />}>Sort</StyledButton>
		</Stack>
	);
};

export default Menubar;
