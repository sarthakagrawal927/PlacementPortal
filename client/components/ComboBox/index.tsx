import React from "react";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Input from "../Input";

interface ComboBoxProps<T> extends Omit<AutocompleteProps<T, true, false, true>, "renderInput" | "value"> {
	multiple?: true | undefined;
	label?: string;
	placeholder?: string;
	labelField?: string;
	width?: string;
	error?: boolean;
	helperText?: string;
	renderInput?: (params: object) => React.ReactNode;
}

const ComboBox = <T extends { [key: string]: string | number } | string>({
	options,
	multiple,
	width,
	label,
	placeholder,
	freeSolo,
	labelField,
	error,
	helperText,
	...props
}: ComboBoxProps<T>) => {
	return (
		<Autocomplete
			sx={{ width }}
			multiple={multiple}
			filterSelectedOptions={multiple ? true : false}
			limitTags={2}
			options={options}
			getOptionLabel={(option: T) => {
				if (typeof option === "string") return option;
				return option[labelField || "label"] as string;
			}}
			freeSolo={freeSolo}
			{...props}
			renderInput={params => (
				<Input
					error={error}
					helperText={helperText}
					variant="outlined"
					{...params}
					label={label}
					placeholder={placeholder}
				/>
			)}
			renderTags={
				freeSolo
					? (value: readonly T[], getTagProps) =>
							value.map((option: T, index: number) => (
								<Chip
									variant="outlined"
									label={typeof option === "string" ? option : option[labelField || "label"]}
									{...getTagProps({ index })}
									key={index}
								/>
							))
					: undefined
			}
		/>
	);
};

export default ComboBox;
