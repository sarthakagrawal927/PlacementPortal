import styled from "styled-components";
import { Box, RadioGroup } from "@mui/material";
import { uiColor } from "styles/styles";

export const UpdateCompanyContainer = styled(Box)`
	display: flex;
	width: 100%;
	height: 95%;
`;

export const UpdateCompanyForm = styled.form`
	width: 68%;
	max-width: 1200px;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 2em;
	margin: 0 auto;
`;

export const ShortlistInfoContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	width: 33%;
`;

export const ShortlistInfo = styled(Box)`
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
export const OfferTypeContainer = styled(Box)`
	display: flex;
	justify-content: flex-start;
	margin-left: 1em;
`;
export const RadioGroupRow = styled(RadioGroup)`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	width: 12em;
`;
export const CompanyInfo = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 10%;
	& h1 {
		margin-left: 1em;
		color: ${uiColor.darkGray};
	}
`;
export const CompanyName = styled(Box)`
	display: flex;
	width: max-content;
	align-items: center;
	& h1 {
		margin-left: 1em;
		color: ${uiColor.darkGray};
		font-size: 1.5rem;
		font-weight: 500;
	}
`;

export const ButtonsContainer = styled(Box)`
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin-top: 2em;
`;
