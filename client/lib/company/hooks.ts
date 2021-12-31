import { useState } from "react";
import { Control, useForm } from "react-hook-form";
import { FormInput } from "../new-job/types";

interface UseDialogReturn {
	open: boolean;
	handleClickOpen: () => void;
	handleClose: () => void;
	students: {
		name: string;
		email: string;
		photo: string;
	}[];
}

export const useDialog = (): UseDialogReturn => {
	const [open, setOpen] = useState(false);
	const [students, setStudents] = useState<{ name: string; email: string; photo: string }[]>([
		{
			name: "John Doe",
			email: "johndoe@gmail.com",
			photo:
				"https://images.unsplash.com/photo-1611181355758-089959e2cfb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		},
		{
			name: "Iron Man",
			email: "ironman@gmail.com",
			photo:
				"https://images.unsplash.com/photo-1635863138275-d9b33299680b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
		},
		{
			name: "spiderman",
			email: "spiderman@gmail.com",
			photo:
				"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		},
	]);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return {
		open,
		handleClickOpen,
		handleClose,
		students,
	};
};

interface UseUpdateCompanyReturn {
	control: Control<FormInput, object>;
}

export const useUpdateCompany = (): UseUpdateCompanyReturn => {
	const { control } = useForm<FormInput>();
	return {
		control,
	};
};
