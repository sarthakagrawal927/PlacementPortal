import MainLayout from "layout";
import type { NextPage } from "next";
import Menubar from "./../lib/dashboard/Menubar";
import TableHead from "./../components/TableHead";
import Table from "./../components/Table";
import TableRow from "./../components/TableRow";
import TableBody from "./../components/TableBody";
import TableContainer from "@mui/material/TableContainer";

import { TABLE_HEADERS } from "./../lib/dashboard/tempData";
import { useJobs } from "lib/dashboard/hooks";
const Dashboard: NextPage = () => {
	const { jobs, loading } = useJobs();
	return (
		<MainLayout>
			<Menubar />
			<TableContainer sx={{ marginTop: "2%", maxHeight: "75vh" }}>
				<Table>
					<TableHead tableHeaders={TABLE_HEADERS} />
					{!loading && (
						<TableBody>
							{jobs?.map((job, index) => {
								return <TableRow job={job} index={index} key={index.toString()} />;
							})}
						</TableBody>
					)}
				</Table>
			</TableContainer>
		</MainLayout>
	);
};

export default Dashboard;
