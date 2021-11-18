import ReactDropzone, {
	ILayoutProps,
	IFileWithMeta,
	IPreviewProps,
	StatusValue,
	IInputProps,
} from "react-dropzone-uploader";
import { getDroppedOrSelectedFiles } from "html5-file-selector";
import UploadIcon from "../icons/Upload";
import CloseIcon from "../icons/Close";
import { useTheme } from "@mui/material";
import { alpha } from "@mui/system";

const Preview = ({ meta }: IPreviewProps) => {
	const { name, percent, status, previewUrl } = meta;
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img style={{ height: "100%", width: "100%", objectFit: "contain" }} src={previewUrl ?? ""} alt="uploaded photo" />
	);
};

const Layout = ({ input, previews, dropzoneProps, files, extra: { maxFiles, onRemoveFile } }: ILayoutProps) => {
	return (
		<>
			{previews}
			{files.length > 0 && (
				<button
					style={{
						position: "absolute",
						top: "2",
						right: "2",
						background: "transparent",
						border: "none",
						cursor: "pointer",
					}}
					onClick={() => onRemoveFile(files[0])}
				>
					<CloseIcon width="30" height="30" color="gray" />
				</button>
			)}
			<div {...dropzoneProps}>{files.length < maxFiles && input}</div>
		</>
	);
};

const Input = ({ accept, onFiles, getFilesFromEvent }: IInputProps) => {
	return (
		<label style={{ cursor: "pointer", textAlign: "center" }}>
			<UploadIcon height="25%" width="25%" />
			<input
				style={{ visibility: "hidden", height: "100%", width: "100%" }}
				type="file"
				required
				accept={accept}
				multiple
				onChange={e => {
					getFilesFromEvent(e)?.then(chosenFiles => {
						onFiles(chosenFiles);
					});
				}}
			/>
		</label>
	);
};

interface DropzoneProps {
	setFile: (file: File) => void;
	accept: string;
	rounded?: boolean;
}
const Dropzone = ({ setFile, accept, rounded }: DropzoneProps) => {
	const handleChangeStatus = (fileWithMeta: IFileWithMeta, status: StatusValue) => {
		if (status === "done") {
			setFile(fileWithMeta.file);
		}
	};
	const getFilesFromEvent = (event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLElement>) => {
		return new Promise<File[]>(resolve => {
			getDroppedOrSelectedFiles(event).then((chosenFiles: any[]) => {
				resolve(chosenFiles.map(f => f.fileObject));
			});
		});
	};

	const theme = useTheme();
	return (
		<ReactDropzone
			PreviewComponent={Preview}
			onChangeStatus={handleChangeStatus}
			maxFiles={1}
			multiple={false}
			accept={accept}
			LayoutComponent={Layout}
			InputComponent={Input}
			getFilesFromEvent={getFilesFromEvent}
			styles={{
				dropzone: {
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: rounded ? "50%" : 0,
				},
				dropzoneActive: {
					border: `5px dotted ${theme.uiColor.green}`,
					backgroundColor: alpha(theme.uiColor.green, 0.1),
				},
				dropzoneReject: { border: `5px dotted ${theme.uiColor.red}`, backgroundColor: alpha(theme.uiColor.red, 0.1) },
			}}
		/>
	);
};

export default Dropzone;
