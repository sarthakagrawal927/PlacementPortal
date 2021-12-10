import styled from "styled-components";
import { Box, Typography, Grid, RadioGroup } from "@mui/material";
import { uiColor } from "../../styles/styles";
import { Input, Button } from "components";

export const Form = styled.form`
	width: 100%;
	max-width: 1200px;
	height: 100%;
	padding: 2em;
	margin: 0 auto;
`;

export const NewJobHeading = styled(Typography)`
	font-size: 1.5rem;
	font-weight: 600;
	text-transform: uppercase;
	margin: 1.5em 0;
`;

export const UploadCompanyLogo = styled(Box)`
	border: 3px dotted ${uiColor.blue};
	background-color: ${uiColor.lightBlue};
	width: 5em;
	height: 5em;
	position: relative;
`;
export const UploadText = styled(Typography)`
	position: absolute;
	top: 60%;
	width: 100%;
	text-align: center;
	font-size: 0.8rem;
`;

export const Section = styled(Grid)`
	border: 1px solid ${uiColor.gray};
	border-radius: 30px;
	padding: 1em 2em 2em 2em;
	margin-top: 4em;
	position: relative;
	margin-left: 0;
	.MuiGrid-item {
		padding-left: 0px;
	}
`;

export const SectionHeading = styled(Typography)`
	position: absolute;
	top: -15px;
	background-color: white;
	font-weight: 500;
	padding: 0 0.8em;
`;

export const OfferTypeContainer = styled(Box)`
	display: flex;
	justify-content: space-around;
`;

export const RadioGroupRow = styled(RadioGroup)`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
`;

export const DatePickerInput = styled(Input)`
	& input {
		height: 0.65em;
		min-width: 14rem;
	}
	width: 95%;
`;

export const UploadAttachments = styled(Box)`
	border: 3px dotted ${uiColor.blue};
	background-color: ${uiColor.lightBlue};
	width: 90%;
	margin-left: 5%;
	height: 12em;
	position: relative;
`;
export const UploadAttachmentsText = styled(Typography)`
	position: absolute;
	top: 70%;
	width: 100%;
	text-align: center;
	font-size: 1rem;
	font-weight: medium;
`;

export const SubmitButton = styled(Button)`
	margin-top: 2em !important;
	font-size: 0.8rem;
	padding: 0.5em 1em;
`;
