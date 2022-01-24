import React from "react";
import { Theme } from "@mui/material";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import { SxProps } from "@mui/system";
import Chip from "@mui/material/Chip";
import Input from "../Input";

export interface ComboBoxProps<T> extends Omit<AutocompleteProps<T, true, false, true>, "renderInput" | "value"> {
	multiple?: true | undefined;
	label?: string;
	placeholder?: string;
	labelField?: string;
	width?: string;
	error?: boolean;
	inputSx?: SxProps<Theme>;
	helperText?: string;
	renderInput?: (params: object) => React.ReactNode;
}

const ComboBox = <T extends { [key: string]: string | number } | string>({
	options,
	inputSx,
	multiple,
	width,
	label,
	placeholder,
	freeSolo,
	labelField,
	error,
	defaultValue,
	helperText,
	...props
}: ComboBoxProps<T>) => {
	return (
		<Autocomplete
		
			sx={{ width }}
			multiple={multiple}
			defaultValue={defaultValue}
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
					sx={inputSx}
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
