import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "@mui/material";
import { Input, Checkbox, Radio, Dropzone, Button } from "../components";
import { RadioGroup, FormControlLabel } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>MIT Placement Portal</title>
				<meta name="description" content="Placement portal of Manipal Institute of Technology." />
				<link rel="icon" type="image/ico" href="/images/favicon.ico" />
			</Head>

			<main>
				<Input placeholder="New input" height="2em" width="150px" />
				<Checkbox />
				<RadioGroup defaultValue="I" aria-label="offer" name="offer">
					<FormControlLabel value="P" control={<Radio />} label="P" />
					<FormControlLabel value="I" control={<Radio />} label="I" />
					<FormControlLabel value="P+I" control={<Radio />} label="P+I" />
					<FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
				</RadioGroup>
				<div style={{ width: "150px", height: "150px" }}>
					<Dropzone setFile={file => console.log(file)} accept="image/*" />
				</div>
				<Button
					size="large"
					rounded
					text={"Upload"}
					onClick={() => {
						console.log("button clicked");
					}}
					endIcon={<UploadIcon />}
				/>
				<Button
					variant="outlined"
					color="error"
					size="medium"
					text={"Delete"}
					onClick={() => {
						console.log("button clicked");
					}}
					endIcon={<DeleteIcon />}
				/>

				<Button
					loading
					size="small"
					variant="outlined"
					text={"Save"}
					onClick={() => {
						console.log("button clicked");
					}}
					endIcon={<DeleteIcon />}
				/>
			</main>
		</div>
	);
};

export default Home;
