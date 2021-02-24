import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { ReactElement } from "react";

// ! Favicon problem
export default class MyDocument extends Document {
	render(): ReactElement {
		return (
			<Html>
				<Head>
					<link rel='shortcut icon' href='favicon.png' type='image/png' />

					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap'
						rel='stylesheet'
					/>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
