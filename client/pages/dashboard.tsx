import MainLayout from "./../layout";
import type { NextPage } from "next";
import Menubar from "./../lib/dashboard/Menubar";
import TableHead from "./../components/TableHead";
import Table from "./../components/Table";
import TableRow from "./../components/TableRow";
import TableBody from "./../components/TableBody";
import TableContainer from "@mui/material/TableContainer";

import { TABLE_HEADERS, COMPANIES } from "./../lib/dashboard/tempData";

const Dashboard: NextPage = () => {
	return (
		<MainLayout>
			<Menubar />
			<TableContainer sx={{ marginTop: "2%", maxHeight: "75vh" }}>
				<Table>
					<TableHead tableHeaders={TABLE_HEADERS} />
					<TableBody>
						{COMPANIES.map((company, index) => {
							return <TableRow company={company} index={index} key={index.toString()} />;
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</MainLayout>
	);
};

export default Dashboard;
