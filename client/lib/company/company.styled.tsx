import { Box, Stack, Button as MaterialButton } from "@mui/material";
import { uiColor } from "../../styles/styles";
import styled from "styled-components";
import { Button } from "components";

export const MainContainer = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: space-around;
`;

export const JobDetailsContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	width: 60%;
	padding: 2%;
`;

export const JobDetailsHeader = styled(Stack)`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

export const StatusInfo = styled(Box)`
	display: flex;
	flex-direction: column;
	width: 33%;
`;

export const StatusContainer = styled(Box)`
	border: 1px solid ${uiColor.gray};
	border-radius: 1.5em;
	padding: 2em;
	margin-top: 2em;
	position: relative;
	& h3 {
		position: absolute;
		background-color: white;
		padding: 0.25em 1em;
		top: -10%;
	}
`;

export const CompanyInfo = styled(Box)`
	display: flex;
	align-items: center;
	width: 60%;
	& h1 {
		margin-left: 1em;
		color: ${uiColor.darkGray};
	}
`;

export const UpdateButton = styled(Button)`
	font-size: 0.8rem;
	padding: 0.5em 1em !important;
	border-radius: 50px !important;
	height: max-content;
	width: max-content;
`;

export const JobSpecifications = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 2em;
`;
export const JobSpecRow = styled(Box)`
	display: flex;
	justify-content: space-between;
	margin: 0.8em 0;
`;

export const JobDescription = styled(Box)`
	display: flex;
	flex-direction: column;
`;

export const AddManuallyButton = styled(MaterialButton)`
	padding: 0.5em 1em;
	margin-top: 2em;
	margin-left: 2em;
`;

export const CSVButton = styled(Button)`
	margin-top: 2em !important;
	border-radius: 50px !important;
	padding: 0.5em 1em !important;
`;
