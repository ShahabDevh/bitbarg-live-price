import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="fa">
			<Head>
				<link
					href="/fonts/IRANSans/iransans.css"
					rel="preload"
					as="font"
					crossOrigin=""
				/>
			</Head>
			<body dir="rtl">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
