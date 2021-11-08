import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>MIT Placement Portal</title>
				<meta
					name='description'
					content='Placement portal of Manipal Institute of Technology.'
				/>
				<link rel='icon' type='image/ico' href='/images/favicon.ico' />
			</Head>

			<main>MIT Placement Portal</main>
		</div>
	);
};

export default Home;
