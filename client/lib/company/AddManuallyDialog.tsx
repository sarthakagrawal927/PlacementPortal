import { Avatar, createFilterOptions, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ComboBox } from "components";
import { AddManuallyButton } from "./company.styled";
import { useDialog } from "./hooks";

const AddManuallyDialog = () => {
	const { handleClickOpen, open, handleClose, students } = useDialog();

	return (
		<span>
			<AddManuallyButton variant="text" onClick={handleClickOpen}>
				ADD MANUALLY
			</AddManuallyButton>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Add Students Manually</DialogTitle>
				<DialogContent>
					<DialogContentText>Filter students by their Email ID.</DialogContentText>
					<ComboBox
						sx={{ marginTop: "1em" }}
						size="small"
						id="email"
						label="Email Address"
						multiple
						filterOptions={createFilterOptions<{ name: string; email: string; photo: string }>({
							matchFrom: "start",
							trim: true,
							stringify: option => option.email,
						})}
						options={students}
						getOptionLabel={option => option.email}
						renderOption={(props, option) => (
							<li {...props}>
								<Grid container alignItems="center">
									<Grid item>
										<Avatar src={option.photo} alt={option.name} />
									</Grid>
									<Grid item xs marginLeft="1em">
										<Typography>{option.name}</Typography>
										<Typography fontSize="0.6rem">{option.email}</Typography>
									</Grid>
								</Grid>
							</li>
						)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>SUBMIT</Button>
				</DialogActions>
			</Dialog>
		</span>
	);
};

export default AddManuallyDialog;
