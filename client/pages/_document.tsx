import { AppComponent, AppProps } from "next/dist/shared/lib/router/router";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
	static async getInitialProps({ renderPage }: { renderPage: any }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage((App: AppComponent) => (props: AppProps) => sheet.collectStyles(<App {...props} />));
		return { ...page, styles: sheet.getStyleElement() };
	}

	render() {
		return (
			<Html>
				<Head>{this.props.styles}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
